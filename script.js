'use strict';

const WHATSAPP_NUMBER = '971504983085';
const STRIPE_CHECKOUT_ENDPOINT = window.COUGAR_STRIPE_ENDPOINT || '/api/create-checkout-session';
const PRODUCTS_PER_PAGE = 10;
let currentFilter = 'all';
let currentPage = 1;
let cart = [];

const products = [
  ['iPhone 16 Pro Max','New','256GB','Natural Titanium','AED 4,699','./assets/iphone-real-01.png','New sealed'],
  ['iPhone 16 Pro','New','256GB','Black Titanium','AED 4,299','./assets/iphone-real-02.png','New sealed'],
  ['iPhone 16 Plus','New','128GB','Ultramarine','AED 3,399','./assets/iphone-real-04.png','New sealed'],
  ['iPhone 16','New','128GB','Teal','AED 2,999','./assets/iphone-real-04.png','New sealed'],
  ['iPhone 15 Pro Max','Used','256GB','Blue Titanium','AED 3,799','./assets/iphone-real-07.png','85%+ checked'],
  ['iPhone 15 Pro','Used','128GB','Natural Titanium','AED 3,199','./assets/iphone-real-08.png','85%+ checked'],
  ['iPhone 15 Plus','New','128GB','Black','AED 2,849','./assets/iphone-real-04.png','New sealed'],
  ['iPhone 15','New','128GB','Pink','AED 2,499','./assets/iphone-real-04.png','New sealed'],
  ['iPhone 14 Pro Max','Used','256GB','Deep Purple','AED 2,899','./assets/iphone-real-04.png','85%+ checked'],
  ['iPhone 14 Pro','Used','128GB','Space Black','AED 2,449','./assets/iphone-real-05.png','85%+ checked'],
  ['iPhone 14 Plus','Used','128GB','Midnight','AED 1,949','./assets/iphone-real-04.png','85%+ checked'],
  ['iPhone 14','Used','128GB','Blue','AED 1,749','./assets/iphone-real-04.png','85%+ checked'],
  ['iPhone 13 Pro Max','Used','256GB','Sierra Blue','AED 2,099','./assets/iphone-real-05.png','85%+ checked'],
  ['iPhone 13 Pro','Used','128GB','Graphite','AED 1,799','./assets/iphone-real-05.png','85%+ checked'],
  ['iPhone 13','Used','128GB','Pink','AED 1,399','./assets/iphone-real-04.png','85%+ checked'],
  ['iPhone 13 Mini','Used','128GB','Starlight','AED 1,199','./assets/iphone-real-03.png','85%+ checked'],
  ['iPhone 12 Pro Max','Used','256GB','Pacific Blue','AED 1,649','./assets/iphone-real-05.png','85%+ checked'],
  ['iPhone 12 Pro','Used','128GB','Graphite','AED 1,399','./assets/iphone-real-05.png','85%+ checked'],
  ['iPhone 12','Used','128GB','Purple','AED 1,049','./assets/iphone-real-04.png','85%+ checked'],
  ['iPhone 12 Mini','Used','64GB','White','AED 899','./assets/iphone-real-03.png','85%+ checked'],
  ['iPhone 11 Pro Max','Used','256GB','Midnight Green','AED 1,199','./assets/iphone-real-05.png','85%+ checked'],
  ['iPhone 11 Pro','Used','64GB','Gold','AED 999','./assets/iphone-real-05.png','85%+ checked'],
  ['iPhone 11','Used','128GB','Black','AED 849','./assets/iphone-real-04.png','85%+ checked'],
  ['iPhone XS Max','Used','256GB','Gold','AED 749','./assets/iphone-real-06.png','85%+ checked'],
  ['iPhone XS','Used','64GB','Space Gray','AED 649','./assets/iphone-real-06.png','85%+ checked'],
  ['iPhone XR','Used','128GB','Coral','AED 599','./assets/iphone-real-06.png','85%+ checked'],
  ['iPhone X','Used','64GB','Silver','AED 499','./assets/iphone-real-06.png','85%+ checked'],
  ['iPhone SE 2022','Used','64GB','Red','AED 649','./assets/iphone-real-09.png','85%+ checked'],
  ['iPhone 8','Used','64GB','Space Gray','AED 299','./assets/iphone-real-06.png','85%+ checked'],
  ['iPhone 8 Plus','Used','64GB','Gold','AED 349','./assets/iphone-real-06.png','85%+ checked']
].map((item, index) => ({
  id: index + 1,
  name: item[0],
  status: item[1],
  storage: item[2],
  color: item[3],
  price: item[4],
  image: item[5],
  battery: item[6],
  condition: item[1],
  colors: buildColors(item[3])
}));

function buildColors(primary) {
  const base = ['Natural Titanium', 'Black Titanium', 'White Titanium', 'Blue Titanium', 'Desert Titanium'];
  const regular = ['Black', 'White', 'Blue', 'Pink', 'Green', 'Red'];
  const older = ['Space Gray', 'Silver', 'Gold', 'Rose Gold'];
  const set = primary.includes('Titanium') ? base : (['Space Gray','Silver','Gold','Rose Gold','Coral'].includes(primary) ? older : regular);
  return [primary, ...set.filter(color => color !== primary)].slice(0, 5);
}

const colorMap = {
  'Natural Titanium':'#d8d2c8','Black Titanium':'#2d3033','White Titanium':'#f1f0ec','Blue Titanium':'#586676','Desert Titanium':'#c9aa8d','Space Black':'#242426','Deep Purple':'#51495f','Sierra Blue':'#9bb5d0','Graphite':'#46464a','Silver':'#e5e5e0','Gold':'#d8c09b','Rose Gold':'#d9a7a0','Midnight':'#191d26','Starlight':'#ede8dc','Blue':'#93a9bd','Pink':'#f4c8d1','Green':'#9db7a5','Red':'#b6172d','Yellow':'#f5df8e','Purple':'#c7b6dc','Black':'#111','White':'#f7f7f2','Teal':'#3aa9a0','Ultramarine':'#4f68d7','Space Gray':'#535150','Coral':'#ff7f68','Pacific Blue':'#496678','Midnight Green':'#4e5851'
};

const productGrid = document.getElementById('productGrid');
const pagination = document.getElementById('pagination');
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
}

function priceNumber(product) {
  return Number(String(product.price).replace(/[^0-9.]/g, '')) || 0;
}

function qtyAvailable(product) {
  return Math.max(2, 14 - ((product.id * 3) % 11));
}

function filteredProducts() {
  if (currentFilter === 'all') return products;
  return products.filter(product => product.status === currentFilter);
}

function productCard(product) {
  const available = qtyAvailable(product);
  const barWidth = Math.min(100, 18 + available * 7);
  const swatches = product.colors.map((color, index) => `
    <button class="swatch${index === 0 ? ' active' : ''}" type="button" data-action="color" data-color="${escapeHtml(color)}" style="--color:${colorMap[color] || '#d8d2c8'}" aria-label="Choose ${escapeHtml(color)}"></button>
  `).join('');

  return `
    <article class="product-card" data-product-id="${product.id}" data-selected-color="${escapeHtml(product.colors[0])}">
      <div class="product-media">
        <div class="badges"><span class="badge">${escapeHtml(product.status)}</span><span class="badge storage">${escapeHtml(product.storage)}</span></div>
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
      </div>
      <div class="product-body">
        <h3 class="product-title">${escapeHtml(product.name)}</h3>
        <p class="product-meta"><span data-color-label>${escapeHtml(product.colors[0])}</span> · ${escapeHtml(product.condition)} · ${escapeHtml(product.battery)}</p>
        <div class="product-price">${escapeHtml(product.price)}</div>
        <div class="stock"><div class="stock-top"><span>QTY Available</span><strong>${available} pcs</strong></div><div class="stock-bar"><span style="width:${barWidth}%"></span></div></div>
        <div class="swatches" aria-label="Choose color">${swatches}</div>
        <div class="product-actions">
          <div class="qty-control" aria-label="Quantity selector">
            <button type="button" data-action="minus" aria-label="Decrease quantity">−</button>
            <input value="1" data-qty readonly inputmode="numeric" aria-label="Quantity">
            <button type="button" data-action="plus" aria-label="Increase quantity">+</button>
          </div>
          <button class="add-cart" type="button" data-action="add">Add to Cart</button>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  if (!productGrid) return;
  const list = filteredProducts();
  const totalPages = Math.max(1, Math.ceil(list.length / PRODUCTS_PER_PAGE));
  currentPage = Math.min(Math.max(1, currentPage), totalPages);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  productGrid.innerHTML = list.slice(start, start + PRODUCTS_PER_PAGE).map(productCard).join('');
  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  if (!pagination) return;
  pagination.innerHTML = '';
  if (totalPages <= 1) return;
  for (let page = 1; page <= totalPages; page += 1) {
    const btn = document.createElement('button');
    btn.className = `page-btn${page === currentPage ? ' active' : ''}`;
    btn.type = 'button';
    btn.textContent = String(page);
    btn.addEventListener('click', () => {
      currentPage = page;
      renderProducts();
      document.getElementById('products')?.scrollIntoView({behavior:'smooth', block:'start'});
    });
    pagination.appendChild(btn);
  }
}

function getCardQty(card) {
  const qty = parseInt(card.querySelector('[data-qty]')?.value || '1', 10);
  return Number.isFinite(qty) && qty > 0 ? qty : 1;
}

function setCardQty(card, qty) {
  const input = card.querySelector('[data-qty]');
  if (input) input.value = String(Math.max(1, Math.min(10, qty)));
}

function findProduct(id) {
  return products.find(product => String(product.id) === String(id));
}

function addToCart(product, qty, color) {
  if (!product) return;
  const key = `${product.id}-${color}`;
  const existing = cart.find(item => item.key === key);
  if (existing) existing.qty = Math.min(99, existing.qty + qty);
  else cart.push({...product, key, qty, selectedColor: color});
  renderCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = String(count); });

  if (!cartItemsEl || !cartTotalEl || !checkoutBtn) return;
  if (!cart.length) {
    cartItemsEl.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
    cartTotalEl.textContent = 'Total: AED 0';
    checkoutBtn.href = '#products';
    checkoutBtn.setAttribute('aria-disabled', 'true');
    checkoutBtn.textContent = 'Checkout Now';
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}">
      <div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.selectedColor)} / ${escapeHtml(item.storage)}</span><small>Qty: ${item.qty} · ${escapeHtml(item.price)}</small></div>
      <button class="remove-item" type="button" data-remove-key="${escapeHtml(item.key)}" aria-label="Remove item">×</button>
    </div>`).join('');

  const total = cart.reduce((sum, item) => sum + priceNumber(item) * item.qty, 0);
  cartTotalEl.textContent = `Total: AED ${total.toLocaleString('en-US')}`;
  checkoutBtn.href = '#checkout';
  checkoutBtn.removeAttribute('aria-disabled');
  checkoutBtn.textContent = 'Checkout Now';
}

function checkoutPayload() {
  return {
    items: cart.map(item => ({
      id: item.id,
      quantity: item.qty,
      color: item.selectedColor,
      storage: item.storage
    }))
  };
}

async function startStripeCheckout() {
  if (!checkoutBtn) return;
  if (!cart.length) {
    openCart();
    return;
  }

  const originalText = checkoutBtn.textContent;
  checkoutBtn.textContent = 'Opening secure checkout...';
  checkoutBtn.classList.add('loading');
  checkoutBtn.setAttribute('aria-busy', 'true');

  try {
    const response = await fetch(STRIPE_CHECKOUT_ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(checkoutPayload())
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.url) {
      throw new Error(data.error || 'Stripe Checkout could not be created.');
    }

    window.location.href = data.url;
  } catch (error) {
    console.error(error);
    checkoutBtn.textContent = originalText;
    checkoutBtn.classList.remove('loading');
    checkoutBtn.removeAttribute('aria-busy');
    alert('Checkout is not ready yet. Please check your Stripe backend setup, then try again.');
  }
}

function openCart() {
  if (!cartDrawer) return;
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
}

function closeCart() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
}

function handleProductAction(event) {
  const control = event.target.closest('[data-action]');
  if (!control || !productGrid?.contains(control)) return;
  event.preventDefault();
  event.stopPropagation();

  const card = control.closest('.product-card');
  if (!card) return;
  const action = control.dataset.action;

  if (action === 'color') {
    const color = control.dataset.color || '';
    card.dataset.selectedColor = color;
    card.querySelectorAll('[data-action="color"]').forEach(btn => btn.classList.toggle('active', btn === control));
    const label = card.querySelector('[data-color-label]');
    if (label) label.textContent = color;
    return;
  }

  if (action === 'minus') {
    setCardQty(card, getCardQty(card) - 1);
    return;
  }

  if (action === 'plus') {
    setCardQty(card, getCardQty(card) + 1);
    return;
  }

  if (action === 'add') {
    const product = findProduct(card.dataset.productId);
    const qty = getCardQty(card);
    const color = card.dataset.selectedColor || product?.color || '';
    addToCart(product, qty, color);
    const original = control.textContent;
    control.textContent = 'Added';
    control.classList.add('added');
    window.setTimeout(() => {
      control.textContent = original;
      control.classList.remove('added');
    }, 850);
  }
}

function init() {
  renderProducts();
  renderCart();

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      currentPage = 1;
      renderProducts();
    });
  });

  if (productGrid) {
    productGrid.addEventListener('click', handleProductAction);
  }

  document.addEventListener('click', event => {
    if (event.target.closest('[data-open-cart]')) openCart();
    if (event.target.closest('[data-close-cart]')) closeCart();
    const removeBtn = event.target.closest('[data-remove-key]');
    if (removeBtn) {
      cart = cart.filter(item => item.key !== removeBtn.dataset.removeKey);
      renderCart();
    }
    const menuBtn = event.target.closest('[data-menu-toggle]');
    if (menuBtn) document.getElementById('navLinks')?.classList.toggle('open');
  });

  document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => document.getElementById('navLinks')?.classList.remove('open'));
  });
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', event => {
      event.preventDefault();
      startStripeCheckout();
    });
  }


  const splash = document.getElementById('mobileSplash');
  if (splash) {
    window.setTimeout(() => splash.classList.add('hide'), 1900);
    window.setTimeout(() => splash.remove(), 2500);
  }

  if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    navigator.serviceWorker.register('./service-worker.js?v=20260628-mobile-hero-checkout-2').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
