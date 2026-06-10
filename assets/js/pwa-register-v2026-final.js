(function () {
  if (!('serviceWorker' in navigator)) return;
  if (location.protocol !== 'http:' && location.protocol !== 'https:') return;

  var refreshed = false;
  navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (refreshed) return;
    refreshed = true;
    window.location.reload();
  });

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js?v=20260610darkproducts', { updateViaCache: 'none' })
      .then(function (registration) {
        registration.update();
        if (registration.waiting) registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      })
      .catch(function (error) {
        console.warn('Service worker registration failed:', error);
      });
  });
})();
