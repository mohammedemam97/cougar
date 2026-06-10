(function(){
  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, {once:true});
    else fn();
  }

  ready(function(){
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const hero = document.querySelector('.ios-hero');
    const heroPhone = document.querySelector('.ios-hero-bottom-phone');
    const scene = document.getElementById('scene');
    const front = document.getElementById('phoneFront');
    const back = document.getElementById('phoneBack');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if(!hero || reduce) {
      document.documentElement.classList.remove('gsap-ready');
      return;
    }

    if(!gsap || !ScrollTrigger){
      // CDN fallback: everything remains visible and normal.
      document.documentElement.classList.remove('gsap-ready');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });

    // Clean possible old triggers if the browser restored a cached page.
    ScrollTrigger.getAll().forEach(function(trigger){
      if(trigger.vars && trigger.vars.id && String(trigger.vars.id).indexOf('cougar-hero') === 0) trigger.kill(true);
    });

    document.documentElement.classList.add('gsap-ready');

    const q = gsap.utils.selector(document);
    gsap.set([hero.querySelector('.ios-eyebrow'), hero.querySelector('h1'), hero.querySelector('.ios-sub'), hero.querySelector('.ios-scroll-hint')], {
      autoAlpha: 0,
      y: 34,
      filter: 'blur(12px)'
    });
    gsap.set(heroPhone, {
      autoAlpha: .92,
      y: 26,
      scale: .95,
      rotateZ: -4,
      transformOrigin: '50% 45%',
      filter: 'drop-shadow(0 42px 84px rgba(0,0,0,.82))'
    });

    const intro = gsap.timeline({ defaults:{ ease:'power3.out' } });
    intro
      .to(heroPhone, { autoAlpha: 1, y: 0, scale: 1, rotateZ: 0, duration: 1.25 }, .05)
      .to(hero.querySelector('.ios-eyebrow'), { autoAlpha: 1, y: 0, filter:'blur(0px)', duration:.75 }, .18)
      .to(hero.querySelector('h1'), { autoAlpha: 1, y: 0, filter:'blur(0px)', duration: .95 }, .30)
      .to(hero.querySelector('.ios-sub'), { autoAlpha: 1, y: 0, filter:'blur(0px)', duration: .75 }, .50)
      .to(hero.querySelector('.ios-scroll-hint'), { autoAlpha: 1, y: 0, filter:'blur(0px)', duration: .75 }, .68);

    gsap.to(heroPhone, {
      yPercent: 22,
      scale: 1.08,
      rotateZ: 7,
      autoAlpha: .72,
      ease: 'none',
      scrollTrigger: {
        id: 'cougar-hero-intro-phone',
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: .85,
        invalidateOnRefresh: true
      }
    });

    gsap.to([hero.querySelector('.ios-eyebrow'), hero.querySelector('h1'), hero.querySelector('.ios-sub'), hero.querySelector('.ios-scroll-hint')], {
      y: -70,
      autoAlpha: 0,
      filter: 'blur(8px)',
      ease: 'none',
      scrollTrigger: {
        id: 'cougar-hero-intro-copy',
        trigger: hero,
        start: '45% top',
        end: 'bottom top',
        scrub: .8,
        invalidateOnRefresh: true
      }
    });

    if(scene && front && back){
      const caps = ['#cap1','#cap2','#cap3'].map(function(id){ return document.querySelector(id); }).filter(Boolean);
      gsap.set(front, { autoAlpha: 1, xPercent: -50, yPercent: -50, x: 0, y: 0, scale: .96, rotateZ: -5, rotateY: 0, transformOrigin:'50% 50%' });
      gsap.set(back,  { autoAlpha: 0, xPercent: -50, yPercent: -50, x: '64vw', y: 26, scale: .90, rotateZ: 8, rotateY: -18, transformOrigin:'50% 50%' });
      gsap.set(caps, { autoAlpha: 0, y: 40, filter:'blur(14px)' });

      const mm = gsap.matchMedia();

      mm.add('(min-width: 761px)', function(){
        const tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            id: 'cougar-hero-scene-desktop',
            trigger: scene,
            start: 'top top',
            end: '+=2600',
            scrub: 1.05,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        tl
          .to('#cap1', { autoAlpha: 1, y: 0, filter:'blur(0px)', ease:'power3.out' }, 0)
          .to(front, { scale: 1.03, y: -18, rotateZ: 0, ease:'power2.out' }, 0)
          .to(front, { x: '-42vw', rotateZ: -10, rotateY: 20, scale: .90, ease:'power2.inOut' }, .78)
          .to('#cap1', { autoAlpha: 0, y: -34, filter:'blur(10px)', ease:'power2.in' }, .80)
          .to(back, { autoAlpha: 1, x: '24vw', y: 0, rotateZ: 6, rotateY: -8, scale: .92, ease:'power2.out' }, .88)
          .to('#cap2', { autoAlpha: 1, y: 0, filter:'blur(0px)', ease:'power3.out' }, 1.04)
          .to(front, { x: '-110vw', autoAlpha: 0, rotateZ: -18, scale:.82, ease:'power2.in' }, 1.25)
          .to(back, { x: 0, y: -8, rotateZ: 0, rotateY: 0, scale: .98, ease:'power2.inOut' }, 1.35)
          .to('#cap2', { autoAlpha: 0, y: -34, filter:'blur(10px)', ease:'power2.in' }, 2.05)
          .to(back, { y: -28, scale: 1.07, rotateZ: -4, ease:'power2.inOut' }, 2.10)
          .to('#cap3', { autoAlpha: 1, y: 0, filter:'blur(0px)', ease:'power3.out' }, 2.18);

        return function(){ tl.kill(); };
      });

      mm.add('(max-width: 760px)', function(){
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            id: 'cougar-hero-scene-mobile',
            trigger: scene,
            start: 'top top',
            end: '+=1350',
            scrub: .85,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        tl
          .to('#cap1', { autoAlpha: 1, y: 0, filter:'blur(0px)' }, 0)
          .to(front, { scale: 1, y: -12, rotateZ: 0 }, 0)
          .to(front, { x: '-84vw', autoAlpha: 0, rotateZ: -12, scale:.86 }, .80)
          .to('#cap1', { autoAlpha: 0, y: -26, filter:'blur(9px)' }, .78)
          .to(back, { autoAlpha: 1, x: 0, y: -6, rotateZ: 0, rotateY: 0, scale: .92 }, .82)
          .to('#cap2', { autoAlpha: 1, y: 0, filter:'blur(0px)' }, .94)
          .to('#cap2', { autoAlpha: 0, y: -26, filter:'blur(9px)' }, 1.75)
          .to(back, { y: -24, scale: .98, rotateZ: -3 }, 1.76)
          .to('#cap3', { autoAlpha: 1, y: 0, filter:'blur(0px)' }, 1.88);

        return function(){ tl.kill(); };
      });
    }

    // Slow premium reveals for following sections.
    const revealTargets = document.querySelectorAll('.category-intro, .how-order-shot, .collection-title, .filters, .details, .trade, .prefooter, .footer');
    revealTargets.forEach(function(el, index){
      gsap.fromTo(el,
        { autoAlpha: 0, x: index % 2 ? 80 : -80, filter: 'blur(16px)' },
        {
          autoAlpha: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            id: 'cougar-hero-section-reveal-' + index,
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    window.addEventListener('load', function(){
      setTimeout(function(){ ScrollTrigger.refresh(); }, 250);
    });
  });
})();
