Cougar Electronics static website. Extract the ZIP and open index.html. This version includes liquid-glass mobile menu, page blur overlays, improved cart blur, scroll locking, and screenshot-style How to Order section.

Update: Hero scene now uses the uploaded iphone-front.png and iphone-back.png images in assets/images/.


GitHub cache fixed package: CSS/JS filenames are versioned to prevent the old Liquid Smooth hero from staying cached. Upload all files including assets/.


PWA files added:
- manifest.webmanifest
- service-worker.js
- favicon.png
- assets/icons/ app icons

Upload all files/folders to GitHub root. For PWA install support, publish with HTTPS using GitHub Pages.


Update: PWA/app icons and favicon now use the Cougar Electronics logo-based icon.


Cloudflare-only fix: added _headers and updated service-worker cache strategy so Cloudflare Pages loads fresh HTML/CSS/JS. No design/layout files were changed.


GitHub check fix: removed unused legacy assets and bumped CSS/JS/service-worker cache version for Cloudflare. No visual design/layout changes.
