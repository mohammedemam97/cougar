(function(){
  const React = window.React;
  const ReactDOM = window.ReactDOM;
  if(!React || !ReactDOM) return;

  const h = React.createElement;
  const clamp = (value,min,max)=>Math.max(min,Math.min(max,value));
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function readScroll(){
    const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
    return {y:window.scrollY, progress:clamp(window.scrollY/max,0,1)};
  }

  function useScrollValue(){
    const [state,setState]=React.useState(readScroll);
    React.useEffect(()=>{
      let raf=0;
      const onScroll=()=>{
        cancelAnimationFrame(raf);
        raf=requestAnimationFrame(()=>setState(readScroll()));
      };
      onScroll();
      window.addEventListener('scroll',onScroll,{passive:true});
      window.addEventListener('resize',onScroll);
      return()=>{cancelAnimationFrame(raf);window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);};
    },[]);
    return state;
  }

  function ScrollProgress({progress}){
    return h('div',{className:'react-scroll-progress',style:{transform:`scaleX(${progress})`}});
  }

  function CursorGlow(){
    const [pos,setPos]=React.useState({x:-400,y:-400});
    React.useEffect(()=>{
      if(reduceMotion) return;
      const move=e=>setPos({x:e.clientX,y:e.clientY});
      window.addEventListener('pointermove',move,{passive:true});
      return()=>window.removeEventListener('pointermove',move);
    },[]);
    if(reduceMotion) return null;
    return h('div',{className:'react-cursor-glow',style:{transform:`translate3d(${pos.x-160}px,${pos.y-160}px,0)`}});
  }

  function PagePulse(){
    const [show,setShow]=React.useState(true);
    React.useEffect(()=>{const t=setTimeout(()=>setShow(false),760);return()=>clearTimeout(t);},[]);
    return h('div',{className:`react-page-pulse ${show?'show':''}`});
  }

  function HeroScrollMotion(){
    React.useEffect(()=>{
      const hero=document.querySelector('.hero');
      const phone=document.querySelector('.hero-phone');
      if(reduceMotion || !hero || !phone) return;

      let raf=0;
      phone.classList.add('hero-motion-active');

      const apply=()=>{
        raf=0;
        const rect=hero.getBoundingClientRect();
        const progress=clamp(-rect.top / Math.max(rect.height,1),0,1);
        const isMobile=window.innerWidth<=760;
        // Light transform only: avoids the heavy first-scroll feel on mobile browsers.
        const scrollY=isMobile ? clamp(progress*46,0,46) : clamp(progress*42,0,42);
        const turn=isMobile ? progress*10 : progress*9;
        const tilt=isMobile ? progress*-1.6 : progress*-1.4;
        const scale=isMobile ? 1 - clamp(progress*.012,0,.012) : 1 - clamp(progress*.01,0,.01);
        const opacity=isMobile ? 0.86-clamp(progress*.025,0,.025) : 0.95-clamp(progress*.02,0,.02);

        phone.style.setProperty('--hero-y', `${scrollY.toFixed(1)}px`);
        phone.style.setProperty('--hero-rotate', `${turn.toFixed(2)}deg`);
        phone.style.setProperty('--hero-tilt', `${tilt.toFixed(2)}deg`);
        phone.style.setProperty('--hero-scale', scale.toFixed(3));
        phone.style.opacity=String(opacity.toFixed(3));
      };
      const requestApply=()=>{ if(!raf) raf=requestAnimationFrame(apply); };
      apply();
      window.addEventListener('scroll',requestApply,{passive:true});
      window.addEventListener('resize',requestApply);
      return()=>{
        cancelAnimationFrame(raf);
        window.removeEventListener('scroll',requestApply);
        window.removeEventListener('resize',requestApply);
        phone.classList.remove('hero-motion-active');
      };
    },[]);
    return null;
  }


  function CartToast(){
    const [toast,setToast]=React.useState(null);
    React.useEffect(()=>{
      let timer=0;
      const onAdded=(event)=>{
        const detail=event.detail || {};
        window.clearTimeout(timer);
        setToast({
          id:Date.now(),
          name:detail.name || 'Item',
          qty:detail.qty || 1,
          total:detail.total || 0
        });
        timer=window.setTimeout(()=>setToast(null),2200);
      };
      window.addEventListener('cougar:item-added',onAdded);
      return()=>{window.clearTimeout(timer);window.removeEventListener('cougar:item-added',onAdded);};
    },[]);
    if(!toast) return null;
    return h('div',{className:'react-cart-toast bottom-toast',role:'status','aria-live':'polite'},[
      h('span',{className:'toast-mark',key:'mark'},'✓'),
      h('div',{key:'text'},[
        h('strong',{key:'strong'},'Added to cart'),
        h('span',{key:'span'},`${toast.qty} × ${toast.name}`)
      ])
    ]);
  }

  function App(){
    const scroll=useScrollValue();
    return h(React.Fragment,null,[
      h(PagePulse,{key:'pulse'}),
      h(ScrollProgress,{key:'progress',progress:scroll.progress}),
      h(CursorGlow,{key:'glow'}),
      h(HeroScrollMotion,{key:'hero',y:scroll.y}),
      h(CartToast,{key:'cart-toast'})
    ]);
  }

  const root=document.getElementById('react-effects-root') || (()=>{const el=document.createElement('div');el.id='react-effects-root';document.body.appendChild(el);return el;})();
  ReactDOM.createRoot(root).render(h(App));


  document.documentElement.classList.add('react-animations-ready');

  const sectionSelectors=[
    '.hero-content', '.category-intro', '.collection', '.details', '.trade', '.prefooter', '.footer',
    '.page-hero', '.content-section'
  ];

  let sectionObserver;
  function prepareSectionReveals(scope=document){
    const seen=new Set();
    const nodes=[];
    sectionSelectors.forEach(selector=>scope.querySelectorAll(selector).forEach(el=>{
      if(!seen.has(el)){seen.add(el);nodes.push(el);}
    }));
    nodes.forEach((el,index)=>{
      if(el.dataset.sectionRevealReady) return;
      el.dataset.sectionRevealReady='true';
      el.classList.add('section-reveal', index % 2 === 0 ? 'from-left' : 'from-right');
      if(sectionObserver) sectionObserver.observe(el);
    });
  }

  if(!reduceMotion && 'IntersectionObserver' in window){
    sectionObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('section-visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    },{threshold:.18,rootMargin:'0px 0px -12% 0px'});
  }

  prepareSectionReveals(document);
  if(reduceMotion || !sectionObserver){document.querySelectorAll('.section-reveal').forEach(el=>el.classList.add('section-visible'));}

  const grid=document.getElementById('productGrid');
  if(grid){
    const mo=new MutationObserver(()=>prepareSectionReveals(document));
    mo.observe(grid,{childList:true,subtree:true});
  }

  function prepareProductCards(scope=document){
    if(reduceMotion) return;
    const cards=[...scope.querySelectorAll('.product')];
    cards.forEach((card,index)=>{
      card.classList.add('card-reveal');
      card.style.setProperty('--card-delay', `${Math.min(index*55, 360)}ms`);
    });
    if('IntersectionObserver' in window){
      const cardObserver=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('card-visible');
            cardObserver.unobserve(entry.target);
          }
        });
      },{threshold:.16,rootMargin:'0px 0px -8% 0px'});
      cards.forEach(card=>{cardObserver.observe(card); requestAnimationFrame(()=>card.classList.add('card-visible'));});
    }else{
      cards.forEach(card=>card.classList.add('card-visible'));
    }
  }
  prepareProductCards(document);
  window.addEventListener('cougar:products-rendered',()=>requestAnimationFrame(()=>prepareProductCards(document)));

  // Smooth close for menu links on same-page anchors handled in app.js; this keeps all page animations calm.

})();
