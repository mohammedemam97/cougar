(function(){
  function initHeroScene(){
    if(!window.gsap || !window.ScrollTrigger) return;
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scene=document.getElementById('scene');
    const front=document.getElementById('phoneFront');
    const back=document.getElementById('phoneBack');
    if(!scene || !front || !back) return;

    window.gsap.registerPlugin(window.ScrollTrigger);

    window.gsap.set(front,{opacity:1,x:0,y:0,scale:1,rotation:0});
    window.gsap.set(back,{opacity:0,x:0,y:40,scale:.95,rotation:-5});
    window.gsap.set(['#cap1','#cap2','#cap3'],{opacity:0,y:30});

    const isMobile=window.matchMedia && window.matchMedia('(max-width: 760px)').matches;

    if(isMobile){
      // Mobile fix: no pinned 2200px scene. The long pin made products feel hidden.
      // Keep a light phone transition and let users reach products normally.
      window.gsap.set('#cap1',{opacity:1,y:0});
      window.gsap.timeline({
        scrollTrigger:{
          trigger:scene,
          start:'top 75%',
          end:'bottom 20%',
          scrub:.7,
          invalidateOnRefresh:true
        }
      })
      .to(front,{x:'-55vw',opacity:.15,scale:.9,rotation:-8,ease:'none'},0)
      .to(back,{x:0,opacity:1,scale:.92,y:0,rotation:0,ease:'none'},0)
      .to('#cap1',{opacity:0,y:-18,ease:'none'},.3)
      .to('#cap2',{opacity:1,y:0,ease:'none'},.35)
      .to('#cap2',{opacity:0,y:-18,ease:'none'},.72)
      .to('#cap3',{opacity:1,y:0,ease:'none'},.8);
      return;
    }

    const tl=window.gsap.timeline({
      scrollTrigger:{
        trigger:scene,
        start:'top top',
        end:'+=2200',
        scrub:1,
        pin:true,
        anticipatePin:1,
        invalidateOnRefresh:true
      }
    });

    tl.to('#cap1',{opacity:1,y:0,ease:'power2.out'},0)
      .to(front,{scale:.95,y:-20,rotation:4,ease:'power2.inOut'},0)
      .to('#cap1',{opacity:0,y:-30,ease:'power2.in'},1)
      .to(front,{x:'-110vw',opacity:0,rotation:-12,ease:'power2.in'},1)
      .fromTo(back,{x:'110vw',opacity:0,scale:.95,y:0,rotation:12},{x:0,opacity:1,scale:.95,y:0,rotation:0,ease:'power2.out'},1)
      .to('#cap2',{opacity:1,y:0,ease:'power2.out'},1.2)
      .to('#cap2',{opacity:0,y:-30,ease:'power2.in'},2)
      .to(back,{scale:1.02,y:-10,rotation:-3,ease:'power2.inOut'},2)
      .to('#cap3',{opacity:1,y:0,ease:'power2.out'},2.1);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',initHeroScene,{once:true});
  }else{
    initHeroScene();
  }
})();
