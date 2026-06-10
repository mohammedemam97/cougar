/* Lightweight support animations
   React handles the main scroll reveals. This file only adds header shadow and safe product hover tilt.
*/
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const topbar = document.querySelector('.topbar');

  function updateHeader() {
    if (topbar) topbar.classList.toggle('scrolled', window.scrollY > 10);
  }

  function initTiltCards() {
    if (reduceMotion) return;
    document.addEventListener('pointermove', function (event) {
      const card = event.target.closest('.product');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty('--tilt-x', (-y * 2.4).toFixed(2) + 'deg');
      card.style.setProperty('--tilt-y', (x * 2.4).toFixed(2) + 'deg');
    }, { passive: true });

    document.addEventListener('pointerleave', function (event) {
      const card = event.target.closest && event.target.closest('.product');
      if (!card) return;
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    }, true);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);
  updateHeader();
  initTiltCards();
})();
