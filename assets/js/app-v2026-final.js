const PRODUCTS = [
  { id: 1, name: "iPhone 16 Pro Max", category: "new", condition: "New", color: "Desert Titanium", storage: "256GB", price: 5399, discount: 10, stock: 12, maxStock: 20, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Desert Titanium",hex:"#c8ad7f"},{name:"Natural Titanium",hex:"#c4bcb0"},{name:"Black Titanium",hex:"#2d2d2d"},{name:"White Titanium",hex:"#f5f5f0"}] },
  { id: 2, name: "iPhone 16 Pro", category: "new", condition: "New", color: "Natural Titanium", storage: "256GB", price: 4899, discount: 9, stock: 10, maxStock: 18, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Natural Titanium",hex:"#c4bcb0"},{name:"Desert Titanium",hex:"#c8ad7f"},{name:"Black Titanium",hex:"#2d2d2d"},{name:"White Titanium",hex:"#f5f5f0"}] },
  { id: 3, name: "iPhone 16 Plus", category: "new", condition: "New", color: "Ultramarine", storage: "128GB", price: 3999, discount: 8, stock: 14, maxStock: 22, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-ultramarine?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Ultramarine",hex:"#9aadf6"},{name:"Teal",hex:"#b0d4cf"},{name:"Pink",hex:"#f2b8c6"},{name:"Black",hex:"#222"}] },
  { id: 4, name: "iPhone 16", category: "new", condition: "New", color: "Teal", storage: "128GB", price: 3599, discount: 7, stock: 16, maxStock: 25, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Teal",hex:"#b0d4cf"},{name:"Ultramarine",hex:"#9aadf6"},{name:"Pink",hex:"#f2b8c6"},{name:"White",hex:"#f5f5f5"}] },
  { id: 5, name: "iPhone 15 Pro Max", category: "new", condition: "New", color: "Natural Titanium", storage: "256GB", price: 4899, discount: 12, stock: 12, maxStock: 20, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Natural Titanium",hex:"#c4bcb0"},{name:"Blue Titanium",hex:"#4a5568"},{name:"Black Titanium",hex:"#2d2d2d"},{name:"White Titanium",hex:"#f5f5f0"}] },
  { id: 6, name: "iPhone 15 Pro Max", category: "new", condition: "New", color: "Blue Titanium", storage: "512GB", price: 5299, discount: 10, stock: 8, maxStock: 15, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Blue Titanium",hex:"#4a5568"},{name:"Natural Titanium",hex:"#c4bcb0"},{name:"Black Titanium",hex:"#2d2d2d"},{name:"White Titanium",hex:"#f5f5f0"}] },
  { id: 7, name: "iPhone 15 Pro", category: "new", condition: "New", color: "Black Titanium", storage: "256GB", price: 3899, discount: 11, stock: 15, maxStock: 20, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Black Titanium",hex:"#2d2d2d"},{name:"Natural Titanium",hex:"#c4bcb0"},{name:"Blue Titanium",hex:"#4a5568"},{name:"White Titanium",hex:"#f5f5f0"}] },
  { id: 8, name: "iPhone 15 Plus", category: "new", condition: "New", color: "Green", storage: "128GB", price: 3399, discount: 8, stock: 18, maxStock: 25, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-green?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Green",hex:"#b8d4c8"},{name:"Blue",hex:"#a8c5da"},{name:"Pink",hex:"#f2c4d0"},{name:"Black",hex:"#2d2d2d"}] },
  { id: 9, name: "iPhone 15", category: "new", condition: "New", color: "Pink", storage: "128GB", price: 2899, discount: 6, stock: 20, maxStock: 25, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Pink",hex:"#f2c4d0"},{name:"Blue",hex:"#a8c5da"},{name:"Green",hex:"#b8d4c8"},{name:"Black",hex:"#2d2d2d"}] },
  { id: 10, name: "iPhone 15", category: "new", condition: "New", color: "Blue", storage: "256GB", price: 3299, discount: 7, stock: 5, maxStock: 15, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Blue",hex:"#a8c5da"},{name:"Pink",hex:"#f2c4d0"},{name:"Green",hex:"#b8d4c8"},{name:"Black",hex:"#2d2d2d"}] },
  { id: 11, name: "iPhone 14 Plus", category: "new", condition: "New", color: "Midnight", storage: "128GB", price: 2699, discount: 9, stock: 9, maxStock: 18, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Midnight",hex:"#1a1a2e"},{name:"Starlight",hex:"#f5f5f0"},{name:"Blue",hex:"#6b8cae"},{name:"Purple",hex:"#c8b8d8"}] },
  { id: 12, name: "iPhone 14", category: "new", condition: "New", color: "Starlight", storage: "128GB", price: 2299, discount: 8, stock: 11, maxStock: 20, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-starlight?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Starlight",hex:"#f5f5f0"},{name:"Midnight",hex:"#1a1a2e"},{name:"Blue",hex:"#6b8cae"},{name:"Purple",hex:"#c8b8d8"}] },
  { id: 13, name: "iPhone 13", category: "new", condition: "New", color: "Midnight", storage: "128GB", price: 1999, discount: 10, stock: 13, maxStock: 20, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Midnight",hex:"#1a1a2e"},{name:"Starlight",hex:"#f5f5f0"},{name:"Blue",hex:"#6b8cae"},{name:"Pink",hex:"#f2c4d0"}] },
  { id: 14, name: "iPhone 13 Mini", category: "new", condition: "New", color: "Pink", storage: "128GB", price: 1799, discount: 12, stock: 6, maxStock: 15, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Pink",hex:"#f2c4d0"},{name:"Midnight",hex:"#1a1a2e"},{name:"Starlight",hex:"#f5f5f0"},{name:"Blue",hex:"#6b8cae"}] },
  { id: 15, name: "iPhone SE", category: "new", condition: "New", color: "Midnight", storage: "64GB", price: 1399, discount: 15, stock: 7, maxStock: 15, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-midnight-select-202203?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Midnight",hex:"#1a1a2e"},{name:"Starlight",hex:"#f5f5f0"},{name:"Red",hex:"#b11f24"}] },

  { id: 16, name: "iPhone 15 Pro Max", category: "used", condition: "Used", color: "Natural Titanium", storage: "256GB", price: 4099, discount: 13, stock: 7, maxStock: 12, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Natural Titanium",hex:"#c4bcb0"},{name:"Blue Titanium",hex:"#4a5568"},{name:"Black Titanium",hex:"#2d2d2d"},{name:"White Titanium",hex:"#f5f5f0"}] },
  { id: 17, name: "iPhone 15 Pro", category: "used", condition: "Used", color: "Blue Titanium", storage: "128GB", price: 3299, discount: 12, stock: 8, maxStock: 12, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Blue Titanium",hex:"#4a5568"},{name:"Natural Titanium",hex:"#c4bcb0"},{name:"Black Titanium",hex:"#2d2d2d"},{name:"White Titanium",hex:"#f5f5f0"}] },
  { id: 18, name: "iPhone 15", category: "used", condition: "Used", color: "Black", storage: "128GB", price: 2399, discount: 10, stock: 9, maxStock: 14, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Black",hex:"#2d2d2d"},{name:"Blue",hex:"#a8c5da"},{name:"Pink",hex:"#f2c4d0"},{name:"Green",hex:"#b8d4c8"}] },
  { id: 19, name: "iPhone 14 Pro Max", category: "used", condition: "Used", color: "Deep Purple", storage: "256GB", price: 2499, discount: 15, stock: 7, maxStock: 10, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Deep Purple",hex:"#6e5f7a"},{name:"Gold",hex:"#f5e6c8"},{name:"Silver",hex:"#e8e8e8"},{name:"Space Black",hex:"#1a1a1a"}] },
  { id: 20, name: "iPhone 14 Pro", category: "used", condition: "Used", color: "Silver", storage: "128GB", price: 1999, discount: 14, stock: 10, maxStock: 12, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Silver",hex:"#e8e8e8"},{name:"Deep Purple",hex:"#6e5f7a"},{name:"Gold",hex:"#f5e6c8"},{name:"Space Black",hex:"#1a1a1a"}] },
  { id: 21, name: "iPhone 14", category: "used", condition: "Used", color: "Midnight", storage: "128GB", price: 1499, discount: 13, stock: 3, maxStock: 8, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=1200&hei=900&fmt=webp&qlt=70", colors: [{name:"Midnight",hex:"#1a1a2e"},{name:"Starlight",hex:"#f5f5f0"},{name:"Blue",hex:"#6b8cae"},{name:"Purple",hex:"#c8b8d8"}] },
  { id: 22, name: "iPhone 13 Pro Max", category: "used", condition: "Used", color: "Sierra Blue", storage: "256GB", price: 1799, discount: 15, stock: 6, maxStock: 10, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Sierra Blue",hex:"#a8c5da"},{name:"Graphite",hex:"#4a4a4a"},{name:"Gold",hex:"#f5e6c8"},{name:"Silver",hex:"#e8e8e8"}] },
  { id: 23, name: "iPhone 13 Pro", category: "used", condition: "Used", color: "Graphite", storage: "128GB", price: 1599, discount: 12, stock: 8, maxStock: 12, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Graphite",hex:"#4a4a4a"},{name:"Sierra Blue",hex:"#a8c5da"},{name:"Gold",hex:"#f5e6c8"},{name:"Silver",hex:"#e8e8e8"}] },
  { id: 24, name: "iPhone 13", category: "used", condition: "Used", color: "Starlight", storage: "128GB", price: 1199, discount: 11, stock: 9, maxStock: 12, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-starlight-select-2021?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Starlight",hex:"#f5f5f0"},{name:"Midnight",hex:"#1a1a2e"},{name:"Blue",hex:"#6b8cae"},{name:"Pink",hex:"#f2c4d0"}] },
  { id: 25, name: "iPhone 12 Pro Max", category: "used", condition: "Used", color: "Pacific Blue", storage: "256GB", price: 1399, discount: 15, stock: 4, maxStock: 10, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-max-blue-2020?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Pacific Blue",hex:"#536878"},{name:"Graphite",hex:"#4a4a4a"},{name:"Gold",hex:"#f5e6c8"},{name:"Silver",hex:"#e8e8e8"}] },
  { id: 26, name: "iPhone 12 Pro", category: "used", condition: "Used", color: "Graphite", storage: "128GB", price: 1199, discount: 14, stock: 5, maxStock: 10, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Graphite",hex:"#4a4a4a"},{name:"Pacific Blue",hex:"#536878"},{name:"Gold",hex:"#f5e6c8"},{name:"Silver",hex:"#e8e8e8"}] },
  { id: 27, name: "iPhone 12", category: "used", condition: "Used", color: "Black", storage: "128GB", price: 949, discount: 13, stock: 8, maxStock: 14, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Black",hex:"#2d2d2d"},{name:"White",hex:"#f5f5f0"},{name:"Blue",hex:"#6b8cae"},{name:"Green",hex:"#b8d4c8"}] },
  { id: 28, name: "iPhone 11 Pro Max", category: "used", condition: "Used", color: "Midnight Green", storage: "256GB", price: 1099, discount: 15, stock: 4, maxStock: 9, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-pro-max-midnight-green-select-2019?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Midnight Green",hex:"#4e5851"},{name:"Space Gray",hex:"#4a4a4a"},{name:"Gold",hex:"#f5e6c8"},{name:"Silver",hex:"#e8e8e8"}] },
  { id: 29, name: "iPhone 11", category: "used", condition: "Used", color: "Black", storage: "128GB", price: 799, discount: 12, stock: 10, maxStock: 18, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Black",hex:"#2d2d2d"},{name:"White",hex:"#f5f5f0"},{name:"Purple",hex:"#c8b8d8"},{name:"Green",hex:"#b8d4c8"}] },
  { id: 30, name: "iPhone XR", category: "used", condition: "Used", color: "Black", storage: "64GB", price: 599, discount: 10, stock: 6, maxStock: 12, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=700&hei=830&fmt=png-alpha", colors: [{name:"Black",hex:"#2d2d2d"},{name:"White",hex:"#f5f5f0"},{name:"Blue",hex:"#6b8cae"},{name:"Red",hex:"#b11f24"}] },
];

const CART_KEY = 'cougar_cart_static_same_v1';
const phone = '971504983085';
let currentFilter = 'all';
let currentPage = 1;
const perPage = 8;
const selectedColors = {};
function money(v){return `AED ${Number(v).toLocaleString()}`}
function oldPrice(p){return Math.round(p.price / (1 - p.discount / 100))}
function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY))||[]}catch{return[]}}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartUI()}
function cartCount(){return getCart().reduce((s,i)=>s+i.qty,0)}
function cartTotal(){return getCart().reduce((s,i)=>s+i.price*i.qty,0)}
function setupMobileMenu(){
  const b=document.querySelector('.menu-btn'),p=document.querySelector('.mobile-panel');
  if(!b||!p) return;
  let menuScrollY=0;
  const lock=()=>{
    menuScrollY=window.scrollY||document.documentElement.scrollTop||0;
    document.documentElement.classList.add('menu-is-open');
    document.body.classList.add('menu-is-open');
    document.body.style.position='fixed';
    document.body.style.top=`-${menuScrollY}px`;
    document.body.style.left='0';
    document.body.style.right='0';
    document.body.style.width='100%';
  };
  const unlock=()=>{
    const y=menuScrollY||Math.abs(parseInt(document.body.style.top||'0',10))||0;
    document.documentElement.classList.remove('menu-is-open');
    document.body.classList.remove('menu-is-open');
    document.body.style.position='';
    document.body.style.top='';
    document.body.style.left='';
    document.body.style.right='';
    document.body.style.width='';
    window.scrollTo(0,y);
  };
  const close=()=>{p.classList.remove('open');b.classList.remove('open');b.setAttribute('aria-expanded','false');unlock();};
  const open=()=>{p.classList.add('open');b.classList.add('open');b.setAttribute('aria-expanded','true');lock();};
  b.addEventListener('click',e=>{e.stopPropagation();p.classList.contains('open')?close():open()});
  p.addEventListener('click',e=>{const link=e.target.closest('a');if(link) close()});
  document.addEventListener('click',e=>{if(p.classList.contains('open') && !p.contains(e.target) && !b.contains(e.target)) close()});
  window.addEventListener('resize',()=>{if(window.innerWidth>760 && p.classList.contains('open')) close()});
  window.addEventListener('keydown',e=>{if(e.key==='Escape' && p.classList.contains('open')) close()});
}
function renderProducts(){
  const grid=document.querySelector('#productGrid'),pager=document.querySelector('#pager');
  if(!grid||!pager)return;
  const filtered=currentFilter==='all'?PRODUCTS:PRODUCTS.filter(p=>p.category===currentFilter);
  const totalPages=Math.ceil(filtered.length/perPage);
  currentPage=Math.min(currentPage,totalPages||1);
  const visible=filtered.slice((currentPage-1)*perPage,currentPage*perPage);
  grid.innerHTML=visible.map(p=>{
    const stockPercent=Math.round((p.stock/p.maxStock)*100);
    const activeColor=selectedColors[p.id] || p.color;
    return `<article class="product" data-product-id="${p.id}"><div class="product-media"><div class="badges"><span class="badge">${p.category}</span><span class="badge storage">${p.storage}</span></div><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="discount">${p.discount}% OFF</span></div><div class="product-info"><h3>${p.name}</h3><div class="meta product-color" data-product-color="${p.id}">${activeColor}</div><div class="price"><strong>${money(p.price)}</strong><del>${money(oldPrice(p))}</del></div><div class="stock-row"><div class="stock-label"><span>Stock</span><span>${p.stock} left</span></div><div class="bar"><i style="width:${stockPercent}%"></i></div></div><div class="swatches" role="listbox" aria-label="Choose color for ${p.name}">${p.colors.slice(0,4).map((c)=>`<button type="button" class="swatch ${c.name===activeColor?'active':''}" data-swatch-product="${p.id}" data-color="${c.name}" title="${c.name}" aria-label="${c.name}" style="background:${c.hex}"></button>`).join('')}</div><div class="qty-add"><div class="qty"><button type="button" data-minus="${p.id}" aria-label="Decrease quantity">-</button><input value="1" min="1" max="${p.stock}" data-qty="${p.id}" aria-label="Quantity for ${p.name}"><button type="button" data-plus="${p.id}" aria-label="Increase quantity">+</button></div><button type="button" class="add-btn" data-add="${p.id}">Add to Cart</button></div></div></article>`;
  }).join('');
  pager.innerHTML=`<button ${currentPage===1?'disabled':''} data-page="${Math.max(1,currentPage-1)}">‹</button>`+Array.from({length:totalPages},(_,i)=>`<button class="${i+1===currentPage?'active':''}" data-page="${i+1}">${i+1}</button>`).join('')+`<button ${currentPage===totalPages?'disabled':''} data-page="${Math.min(totalPages,currentPage+1)}">›</button>`;
  window.dispatchEvent(new CustomEvent('cougar:products-rendered'));
  requestAnimationFrame(()=>document.querySelectorAll('.product').forEach((card,i)=>{card.style.setProperty('--card-delay',`${Math.min(i*45,260)}ms`);card.classList.add('card-visible')}));
}
function setupProducts(){
  if(!document.querySelector('#productGrid'))return;
  renderProducts();
  document.querySelector('.filters')?.addEventListener('click',e=>{
    const btn=e.target.closest('[data-filter]');
    if(!btn)return;
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');currentFilter=btn.dataset.filter;currentPage=1;renderProducts();
  });
  document.addEventListener('click',e=>{
    const plus=e.target.closest('[data-plus]'),minus=e.target.closest('[data-minus]'),add=e.target.closest('[data-add]'),page=e.target.closest('[data-page]'),swatch=e.target.closest('[data-swatch-product]');
    if(plus||minus){
      const id=Number((plus||minus).dataset.plus||(plus||minus).dataset.minus),input=document.querySelector(`[data-qty="${id}"]`),p=PRODUCTS.find(x=>x.id===id);
      let v=Number(input.value||1);v+=plus?1:-1;input.value=Math.max(1,Math.min(p.stock,v));
    }
    if(swatch){
      const id=Number(swatch.dataset.swatchProduct);
      const color=swatch.dataset.color;
      selectedColors[id]=color;
      const card=swatch.closest('.product');
      card?.querySelectorAll('.swatch').forEach(b=>b.classList.remove('active'));
      swatch.classList.add('active');
      const label=card?.querySelector('[data-product-color]');
      if(label) label.textContent=color;
    }
    if(add){
      const id=Number(add.dataset.add),p=PRODUCTS.find(x=>x.id===id),input=document.querySelector(`[data-qty="${id}"]`);
      const qty=Math.max(1,Math.min(p.stock,Number(input?.value||1)));
      const cart=getCart();const chosenColor=selectedColors[id]||p.color;
      const existing=cart.find(i=>i.id===id&&i.color===chosenColor);
      if(existing)existing.qty=Math.min(p.stock,existing.qty+qty);else cart.push({id:p.id,name:p.name,color:chosenColor,storage:p.storage,price:p.price,image:p.image,qty});
      saveCart(cart);
      window.dispatchEvent(new CustomEvent('cougar:item-added',{detail:{name:p.name,qty,total:cartCount()}}));
    }
    if(page&&!page.disabled){currentPage=Number(page.dataset.page);renderProducts();document.querySelector('#collection')?.scrollIntoView({behavior:'smooth'})}
  });
}
function updateCartUI(){document.querySelectorAll('.cart-count').forEach(el=>el.textContent=cartCount());const list=document.querySelector('#cartItems'),total=document.querySelector('#cartTotal');if(!list||!total)return;const cart=getCart();list.innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><img src="${i.image}" alt="${i.name}"><div><h4>${i.name}</h4><p>${i.color} · ${i.storage} · x${i.qty}</p><strong>${money(i.price*i.qty)}</strong></div><button class="remove" data-remove="${i.id}">×</button></div>`).join(''):'<p class="meta">Your cart is empty.</p>';total.textContent=money(cartTotal())}
let cartScrollY=0;
function openCart(){
  const overlay=document.querySelector('.cart-overlay');
  if(!overlay)return;
  cartScrollY=window.scrollY||document.documentElement.scrollTop||0;
  overlay.classList.add('open');
  document.documentElement.classList.add('cart-is-open');
  document.body.classList.add('cart-is-open');
  document.body.style.position='fixed';
  document.body.style.top=`-${cartScrollY}px`;
  document.body.style.left='0';
  document.body.style.right='0';
  document.body.style.width='100%';
}
function closeCart(){
  const overlay=document.querySelector('.cart-overlay');
  overlay?.classList.remove('open');
  document.documentElement.classList.remove('cart-is-open');
  document.body.classList.remove('cart-is-open');
  document.body.style.position='';
  document.body.style.top='';
  document.body.style.left='';
  document.body.style.right='';
  document.body.style.width='';
  window.scrollTo(0,cartScrollY||0);
}
function whatsappOrder(){const cart=getCart();if(!cart.length)return `https://wa.me/${phone}`;let msg='Hello Cougar Electronics! I want to order:\n\n';cart.forEach(i=>msg+=`• ${i.name} (${i.color}, ${i.storage}) x${i.qty} - ${money(i.price*i.qty)}\n`);msg+=`\nTotal: ${money(cartTotal())}\nLocation: Frij almarar, Deira, Dubai`;return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`}
function setupCart(){document.querySelectorAll('[data-open-cart]').forEach(b=>b.addEventListener('click',openCart));document.querySelectorAll('[data-close-cart]').forEach(b=>b.addEventListener('click',closeCart));document.querySelector('.cart-overlay')?.addEventListener('click',e=>{if(e.target.classList.contains('cart-overlay'))closeCart()});document.body.addEventListener('click',e=>{const r=e.target.closest('[data-remove]');if(r)saveCart(getCart().filter(i=>i.id!==Number(r.dataset.remove)))});document.querySelector('#checkoutBtn')?.addEventListener('click',e=>{e.currentTarget.href=whatsappOrder()});updateCartUI()}
function setupContactForm(){const f=document.querySelector('#contactForm');if(!f)return;f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const text=`Hello Cougar Electronics, my name is ${d.get('name')||''}. ${d.get('message')||''}`;window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,'_blank')})}
document.addEventListener('DOMContentLoaded',()=>{setupMobileMenu();setupProducts();setupCart();setupContactForm()});


/* FINAL FIX: lock menu/cart without moving user to top */
(function(){
  function addOpenClass(type){
    document.documentElement.classList.add(type+'-is-open');
    document.body.classList.add(type+'-is-open');
  }
  function removeOpenClass(type){
    document.documentElement.classList.remove(type+'-is-open');
    document.body.classList.remove(type+'-is-open');
  }
  function openMenuFixed(){
    const panel=document.querySelector('.mobile-panel');
    const btn=document.querySelector('.menu-btn');
    panel?.classList.add('open');
    btn?.classList.add('open');
    btn?.setAttribute('aria-expanded','true');
    addOpenClass('menu');
  }
  function closeMenuFixed(){
    const panel=document.querySelector('.mobile-panel');
    const btn=document.querySelector('.menu-btn');
    panel?.classList.remove('open');
    btn?.classList.remove('open');
    btn?.setAttribute('aria-expanded','false');
    removeOpenClass('menu');
  }
  window.openCart=function(){
    const overlay=document.querySelector('.cart-overlay');
    overlay?.classList.add('open');
    addOpenClass('cart');
    if(typeof updateCartUI==='function') updateCartUI();
  };
  window.closeCart=function(){
    document.querySelector('.cart-overlay')?.classList.remove('open');
    removeOpenClass('cart');
  };
  document.addEventListener('click',function(e){
    const menuBtn=e.target.closest('.menu-btn');
    if(menuBtn){
      e.preventDefault();
      e.stopImmediatePropagation();
      document.querySelector('.mobile-panel')?.classList.contains('open') ? closeMenuFixed() : openMenuFixed();
      return;
    }
    const menuLink=e.target.closest('.mobile-panel a');
    if(menuLink){
      closeMenuFixed();
      return;
    }
    if(document.body.classList.contains('menu-is-open') && !e.target.closest('.mobile-panel')){
      e.preventDefault();
      e.stopImmediatePropagation();
      closeMenuFixed();
      return;
    }
    if(e.target.closest('[data-open-cart]')){
      e.preventDefault();
      e.stopImmediatePropagation();
      window.openCart();
      return;
    }
    if(e.target.closest('[data-close-cart]')){
      e.preventDefault();
      e.stopImmediatePropagation();
      window.closeCart();
      return;
    }
    if(e.target.classList && e.target.classList.contains('cart-overlay')){
      e.preventDefault();
      e.stopImmediatePropagation();
      window.closeCart();
      return;
    }
  },true);
  window.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      closeMenuFixed();
      window.closeCart();
    }
  });
})();

/* === UPLOADED BASE FINAL JS FIXES === */
(function(){
  function updateCheckoutState(){
    const btn=document.getElementById('checkoutBtn');
    if(!btn || typeof getCart!=='function') return;
    const empty=getCart().length===0;
    if(empty){
      btn.classList.add('is-disabled');
      btn.setAttribute('aria-disabled','true');
      btn.dataset.empty='true';
      btn.textContent='Cart is Empty';
      btn.removeAttribute('href');
    }else{
      btn.classList.remove('is-disabled');
      btn.setAttribute('aria-disabled','false');
      btn.dataset.empty='false';
      btn.textContent='Send via WhatsApp';
      if(typeof whatsappOrder==='function') btn.href=whatsappOrder();
    }
  }
  const originalSave=window.saveCart;
  if(typeof originalSave==='function'){
    window.saveCart=function(cart){ originalSave(cart); updateCheckoutState(); };
  }
  document.addEventListener('click',function(e){
    const btn=e.target.closest('#checkoutBtn');
    if(btn && btn.dataset.empty==='true'){
      e.preventDefault();
      e.stopPropagation();
    }
  },true);
  window.addEventListener('storage',updateCheckoutState);
  window.addEventListener('cougar:item-added',updateCheckoutState);
  document.addEventListener('DOMContentLoaded',function(){
    document.body.style.position='';
    document.body.style.top='';
    document.body.style.left='';
    document.body.style.right='';
    document.body.style.width='';
    updateCheckoutState();
    setTimeout(updateCheckoutState,80);
  });
})();
