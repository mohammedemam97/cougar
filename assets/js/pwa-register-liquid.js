(function () {
  if (!('serviceWorker' in navigator)) return;
  if (window.location.protocol !== 'https:' && window.location.protocol !== 'http:') return;

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js', { updateViaCache: 'none' })
      .then(function (registration) { registration.update(); })
      .catch(function (error) { console.warn('Service worker registration failed:', error); });
  });
})();
