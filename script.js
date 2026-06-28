
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('active');
    navLinks.classList.toggle('active', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
  });
}
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  hamburger?.classList.remove('active'); navLinks?.classList.remove('active'); document.body.classList.remove('nav-open');
}));
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => { if (!navbar) return; navbar.classList.toggle('scrolled', window.scrollY > 50); }, {passive:true});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

const products = [
  {
    "id": 1,
    "name": "iPhone 16 Pro Max",
    "status": "New",
    "type": "iPhone",
    "featured": true,
    "location": "256GB",
    "developer": "Natural Titanium",
    "price": "AED 4,699",
    "image": "./assets/iphone-real-01.png",
    "storage": "256GB",
    "color": "Natural Titanium",
    "condition": "New",
    "battery": "New sealed",
    "description": "A18 Pro, ProMotion display, premium titanium finish.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-001",
    "colorOptions": [
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 2,
    "name": "iPhone 16 Pro",
    "status": "New",
    "type": "iPhone",
    "featured": true,
    "location": "256GB",
    "developer": "Black Titanium",
    "price": "AED 4,199",
    "image": "./assets/iphone-real-02.png",
    "storage": "256GB",
    "color": "Black Titanium",
    "condition": "New",
    "battery": "New sealed",
    "description": "Compact Pro performance with advanced camera system.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-002",
    "colorOptions": [
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 3,
    "name": "iPhone 16 Plus",
    "status": "New",
    "type": "iPhone",
    "featured": true,
    "location": "128GB",
    "developer": "Ultramarine",
    "price": "AED 3,399",
    "image": "./assets/iphone-real-04.png",
    "storage": "128GB",
    "color": "Ultramarine",
    "condition": "New",
    "battery": "New sealed",
    "description": "Large display, strong battery life, clean daily performance.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-003",
    "colorOptions": [
      "Black",
      "White",
      "Pink",
      "Teal",
      "Ultramarine",
      "Blue"
    ]
  },
  {
    "id": 4,
    "name": "iPhone 16",
    "status": "New",
    "type": "iPhone",
    "featured": true,
    "location": "128GB",
    "developer": "Teal",
    "price": "AED 2,999",
    "image": "./assets/iphone-real-04.png",
    "storage": "128GB",
    "color": "Teal",
    "condition": "New",
    "battery": "New sealed",
    "description": "Modern iPhone experience with smooth speed and camera upgrades.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-004",
    "colorOptions": [
      "Black",
      "White",
      "Pink",
      "Teal",
      "Ultramarine",
      "Blue"
    ]
  },
  {
    "id": 5,
    "name": "iPhone 15 Pro Max",
    "status": "Used",
    "type": "iPhone",
    "featured": true,
    "location": "256GB",
    "developer": "Blue Titanium",
    "price": "AED 3,799",
    "image": "./assets/iphone-real-07.png",
    "storage": "256GB",
    "color": "Blue Titanium",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Premium used device, checked and ready for daily use.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-005",
    "colorOptions": [
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 6,
    "name": "iPhone 15 Pro",
    "status": "Used",
    "type": "iPhone",
    "featured": true,
    "location": "128GB",
    "developer": "Natural Titanium",
    "price": "AED 3,199",
    "image": "./assets/iphone-real-08.png",
    "storage": "128GB",
    "color": "Natural Titanium",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Pro features in a lighter titanium body.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-006",
    "colorOptions": [
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 7,
    "name": "iPhone 15 Plus",
    "status": "New",
    "type": "iPhone",
    "featured": true,
    "location": "128GB",
    "developer": "Black",
    "price": "AED 2,849",
    "image": "./assets/iphone-real-04.png",
    "storage": "128GB",
    "color": "Black",
    "condition": "New",
    "battery": "New sealed",
    "description": "Big screen and excellent battery for everyday use.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-007",
    "colorOptions": [
      "Black",
      "White",
      "Pink",
      "Teal",
      "Ultramarine",
      "Blue"
    ]
  },
  {
    "id": 8,
    "name": "iPhone 15",
    "status": "New",
    "type": "iPhone",
    "featured": true,
    "location": "128GB",
    "developer": "Pink",
    "price": "AED 2,499",
    "image": "./assets/iphone-real-04.png",
    "storage": "128GB",
    "color": "Pink",
    "condition": "New",
    "battery": "New sealed",
    "description": "USB-C iPhone with bright display and sharp photos.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-008",
    "colorOptions": [
      "Black",
      "White",
      "Pink",
      "Teal",
      "Ultramarine",
      "Blue"
    ]
  },
  {
    "id": 9,
    "name": "iPhone 14 Pro Max",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "256GB",
    "developer": "Deep Purple",
    "price": "AED 2,899",
    "image": "./assets/iphone-real-04.png",
    "storage": "256GB",
    "color": "Deep Purple",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Dynamic Island and Pro camera system at better value.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-009",
    "colorOptions": [
      "Deep Purple",
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 10,
    "name": "iPhone 14 Pro",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "Space Black",
    "price": "AED 2,449",
    "image": "./assets/iphone-real-05.png",
    "storage": "128GB",
    "color": "Space Black",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Powerful Pro model, inspected and cleaned.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-010",
    "colorOptions": [
      "Space Black",
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 11,
    "name": "iPhone 14 Plus",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "Midnight",
    "price": "AED 1,949",
    "image": "./assets/iphone-real-04.png",
    "storage": "128GB",
    "color": "Midnight",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Large screen iPhone with dependable performance.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-011",
    "colorOptions": [
      "Midnight",
      "Black",
      "White",
      "Red",
      "Blue",
      "Purple",
      "Green"
    ]
  },
  {
    "id": 12,
    "name": "iPhone 14",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "Blue",
    "price": "AED 1,749",
    "image": "./assets/iphone-real-04.png",
    "storage": "128GB",
    "color": "Blue",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Clean used model for everyday work and social use.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-012",
    "colorOptions": [
      "Black",
      "White",
      "Red",
      "Blue",
      "Purple",
      "Green"
    ]
  },
  {
    "id": 13,
    "name": "iPhone 13 Pro Max",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "256GB",
    "developer": "Sierra Blue",
    "price": "AED 2,099",
    "image": "./assets/iphone-real-05.png",
    "storage": "256GB",
    "color": "Sierra Blue",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Large ProMotion display with strong battery value.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-013",
    "colorOptions": [
      "Sierra Blue",
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 14,
    "name": "iPhone 13 Pro",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "Graphite",
    "price": "AED 1,799",
    "image": "./assets/iphone-real-05.png",
    "storage": "128GB",
    "color": "Graphite",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Pro camera and premium build in compact size.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-014",
    "colorOptions": [
      "Graphite",
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 15,
    "name": "iPhone 13",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "Starlight",
    "price": "AED 1,299",
    "image": "./assets/iphone-real-04.png",
    "storage": "128GB",
    "color": "Starlight",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Popular model with smooth performance and reliable camera.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-015",
    "colorOptions": [
      "Starlight",
      "Black",
      "White",
      "Red",
      "Blue",
      "Purple",
      "Green"
    ]
  },
  {
    "id": 16,
    "name": "iPhone 13 Mini",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "Red",
    "price": "AED 1,149",
    "image": "./assets/iphone-real-04.png",
    "storage": "128GB",
    "color": "Red",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Small size, full iPhone experience.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-016",
    "colorOptions": [
      "Black",
      "White",
      "Red",
      "Blue",
      "Purple",
      "Green"
    ]
  },
  {
    "id": 17,
    "name": "iPhone 12 Pro Max",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "256GB",
    "developer": "Pacific Blue",
    "price": "AED 1,649",
    "image": "./assets/iphone-real-05.png",
    "storage": "256GB",
    "color": "Pacific Blue",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Big display and triple camera at strong value.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-017",
    "colorOptions": [
      "Pacific Blue",
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 18,
    "name": "iPhone 12 Pro",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "Gold",
    "price": "AED 1,349",
    "image": "./assets/iphone-real-05.png",
    "storage": "128GB",
    "color": "Gold",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Premium stainless build with Pro camera features.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-018",
    "colorOptions": [
      "Gold",
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 19,
    "name": "iPhone 12",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "Purple",
    "price": "AED 1,049",
    "image": "./assets/iphone-real-04.png",
    "storage": "128GB",
    "color": "Purple",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "5G iPhone with OLED display.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-019",
    "colorOptions": [
      "Black",
      "White",
      "Red",
      "Blue",
      "Purple",
      "Green"
    ]
  },
  {
    "id": 20,
    "name": "iPhone 12 Mini",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "64GB",
    "developer": "Black",
    "price": "AED 899",
    "image": "./assets/iphone-real-04.png",
    "storage": "64GB",
    "color": "Black",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Compact 5G iPhone for simple daily use.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-020",
    "colorOptions": [
      "Black",
      "White",
      "Red",
      "Blue",
      "Purple",
      "Green"
    ]
  },
  {
    "id": 21,
    "name": "iPhone 11 Pro Max",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "256GB",
    "developer": "Midnight Green",
    "price": "AED 1,249",
    "image": "./assets/iphone-real-06.png",
    "storage": "256GB",
    "color": "Midnight Green",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Large premium iPhone with triple camera system.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-021",
    "colorOptions": [
      "Midnight Green",
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 22,
    "name": "iPhone 11 Pro",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "Space Gray",
    "price": "AED 1,049",
    "image": "./assets/iphone-real-06.png",
    "storage": "128GB",
    "color": "Space Gray",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Compact Pro model with OLED display.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-022",
    "colorOptions": [
      "Space Gray",
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Blue Titanium",
      "Desert Titanium"
    ]
  },
  {
    "id": 23,
    "name": "iPhone 11",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "White",
    "price": "AED 799",
    "image": "./assets/iphone-real-04.png",
    "storage": "128GB",
    "color": "White",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Affordable iPhone with reliable performance.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-023",
    "colorOptions": [
      "Black",
      "White",
      "Red",
      "Blue",
      "Purple",
      "Green"
    ]
  },
  {
    "id": 24,
    "name": "iPhone SE 2022",
    "status": "New",
    "type": "iPhone",
    "featured": false,
    "location": "64GB",
    "developer": "Midnight",
    "price": "AED 899",
    "image": "./assets/iphone-real-04.png",
    "storage": "64GB",
    "color": "Midnight",
    "condition": "New",
    "battery": "New sealed",
    "description": "Fast chip, classic size, Touch ID convenience.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-024",
    "colorOptions": [
      "Midnight",
      "Space Gray",
      "Silver",
      "Gold",
      "Black",
      "White"
    ]
  },
  {
    "id": 25,
    "name": "iPhone SE 2020",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "64GB",
    "developer": "Red",
    "price": "AED 499",
    "image": "./assets/iphone-real-04.png",
    "storage": "64GB",
    "color": "Red",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Budget iPhone for calls, apps, and light use.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-025",
    "colorOptions": [
      "Red",
      "Space Gray",
      "Silver",
      "Gold",
      "Black",
      "White"
    ]
  },
  {
    "id": 26,
    "name": "iPhone XR",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "128GB",
    "developer": "Coral",
    "price": "AED 599",
    "image": "./assets/iphone-real-09.png",
    "storage": "128GB",
    "color": "Coral",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Large display and simple iPhone experience.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-026",
    "colorOptions": [
      "Coral",
      "Space Gray",
      "Silver",
      "Gold",
      "Black",
      "White"
    ]
  },
  {
    "id": 27,
    "name": "iPhone XS Max",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "256GB",
    "developer": "Gold",
    "price": "AED 699",
    "image": "./assets/iphone-real-06.png",
    "storage": "256GB",
    "color": "Gold",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Premium older model with big OLED display.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-027",
    "colorOptions": [
      "Space Gray",
      "Silver",
      "Gold",
      "Black",
      "White"
    ]
  },
  {
    "id": 28,
    "name": "iPhone XS",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "64GB",
    "developer": "Silver",
    "price": "AED 579",
    "image": "./assets/iphone-real-06.png",
    "storage": "64GB",
    "color": "Silver",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Compact premium design with OLED screen.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-028",
    "colorOptions": [
      "Space Gray",
      "Silver",
      "Gold",
      "Black",
      "White"
    ]
  },
  {
    "id": 29,
    "name": "iPhone X",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "64GB",
    "developer": "Space Gray",
    "price": "AED 449",
    "image": "./assets/iphone-real-06.png",
    "storage": "64GB",
    "color": "Space Gray",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Classic Face ID iPhone at entry price.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-029",
    "colorOptions": [
      "Space Gray",
      "Silver",
      "Gold",
      "Black",
      "White"
    ]
  },
  {
    "id": 30,
    "name": "iPhone 8 Plus",
    "status": "Used",
    "type": "iPhone",
    "featured": false,
    "location": "64GB",
    "developer": "Gold",
    "price": "AED 349",
    "image": "./assets/iphone-real-06.png",
    "storage": "64GB",
    "color": "Gold",
    "condition": "Used",
    "battery": "85%+ checked",
    "description": "Large classic iPhone with Touch ID.",
    "amenities": "Warranty available, Battery checked, Original-like packaging, Data transfer support, WhatsApp ordering, Pickup or delivery options",
    "agentName": "Cougar Electronics",
    "agentPhone": "+971 50 498 3085",
    "url": "COUGAR-030",
    "colorOptions": [
      "Space Gray",
      "Silver",
      "Gold",
      "Black",
      "White"
    ]
  }
];
const offplanGrid = document.getElementById('offplanGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const propertyPagination = document.getElementById('propertyPagination');
const productsPerPage = 8;
const cartItems = [];
const whatsappNumber = '971504983085';
let currentProductPage = 1;
let currentProductFilter = 'all';

function getFilteredProducts(filter = currentProductFilter) {
  if (filter === 'all') return products;
  return products.filter(p => p.status.toLowerCase().includes(filter.toLowerCase()) || p.condition.toLowerCase().includes(filter.toLowerCase()));
}
function getWhatsAppLink(product, color = product.color, qty = 1) {
  const message = `Hello Cougar Electronics, I want to order ${product.name}. Storage: ${product.storage}. Color: ${color}. Qty: ${qty}. Price: ${product.price}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function productSummary(product) {
  const text = product.description || 'iPhone available from Cougar Electronics.';
  return text.length > 112 ? `${text.slice(0,112).trim()}...` : text;
}
function colorOptionsHtml(product) {
  const options = Array.isArray(product.colorOptions) && product.colorOptions.length ? product.colorOptions : [product.color];
  return options.map(color => `<option value="${escapeHtml(color)}"${color === product.color ? ' selected' : ''}>${escapeHtml(color)}</option>`).join('');
}
function getCardQuantity(card) {
  const input = card?.querySelector('[data-qty-input]');
  const qty = parseInt(input?.value || '1', 10);
  return Number.isFinite(qty) && qty > 0 ? qty : 1;
}
function setCardQuantity(card, qty) {
  const input = card?.querySelector('[data-qty-input]');
  if (!input) return;
  input.value = Math.max(1, Math.min(10, qty));
}
function renderPagination(filtered) {
  if (!propertyPagination) return;
  const totalPages = Math.ceil(filtered.length / productsPerPage);
  propertyPagination.innerHTML = '';
  if (totalPages <= 1) return;
  for (let page = 1; page <= totalPages; page++) {
    const button = document.createElement('button');
    button.className = `page-btn${page === currentProductPage ? ' active' : ''}`;
    button.type = 'button';
    button.textContent = page;
    button.setAttribute('aria-label', `Go to product page ${page}`);
    button.addEventListener('click', () => {
      currentProductPage = page;
      renderProducts(currentProductFilter);
      document.getElementById('offplan')?.scrollIntoView({behavior:'smooth', block:'start'});
    });
    propertyPagination.appendChild(button);
  }
}
function colorHex(color) {
  const map = {
    "Natural Titanium":"#c7c1b7","Black Titanium":"#242323","White Titanium":"#f2f0e8","Blue Titanium":"#3f5264",
    "Desert Titanium":"#d3b79d","Space Black":"#1f2024","Deep Purple":"#4d435d","Sierra Blue":"#9bb5d0",
    "Graphite":"#46464a","Silver":"#dedede","Gold":"#d8c29d","Rose Gold":"#d9a7a0","Midnight":"#191d26",
    "Starlight":"#f0eadc","Blue":"#8fb6d9","Pink":"#f6c5cf","Green":"#9bb9a6","Red":"#b7192c",
    "Yellow":"#f4db7a","Purple":"#c7b6dc","Black":"#111111","White":"#f7f7f2","Teal":"#3aa9a0",
    "Ultramarine":"#4f68d7","Space Gray":"#535150","Coral":"#ff7f68"
  };
  return map[color] || "#9ca3af";
}
function colorSwatchesHtml(product) {
  const options = Array.isArray(product.colorOptions) && product.colorOptions.length ? product.colorOptions : [product.color];
  return options.map((color, index) => `
    <button class="swatch${index === 0 ? ' active' : ''}" type="button" data-color-swatch="${escapeHtml(color)}" style="background:${colorHex(color)}" aria-label="${escapeHtml(color)}"></button>
  `).join('');
}
function productQty(product) {
  const qty = Math.max(2, 14 - ((product.id * 3) % 11));
  return qty;
}
function renderProducts(filter = 'all') {
  if (!offplanGrid) return;
  currentProductFilter = filter;
  const filtered = getFilteredProducts(filter);
  const totalPages = Math.max(1, Math.ceil(filtered.length / productsPerPage));
  if (currentProductPage > totalPages) currentProductPage = totalPages;
  const startIndex = (currentProductPage - 1) * productsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + productsPerPage);
  offplanGrid.innerHTML = '';
  paginated.forEach((product, index) => {
    const card = document.createElement('div');
    const qtyAvailable = productQty(product);
    const qtyBar = Math.min(100, 18 + (qtyAvailable * 7));
    card.className = 'product property-card card-reveal';
    card.style.setProperty('--card-delay', `${index * 55}ms`);
    card.innerHTML = `
      <div class="product-media property-image">
        <div class="badges">
          <span class="badge">${escapeHtml(product.status)}</span>
          <span class="badge storage">${escapeHtml(product.storage)}</span>
        </div>
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
      </div>
      <div class="product-info property-info">
        <h3>${escapeHtml(product.name)}</h3>
        <div class="meta"><span class="product-color">${escapeHtml(product.color)}</span> · ${escapeHtml(product.condition)} · ${escapeHtml(product.battery)}</div>
        <div class="price property-price"><strong>${escapeHtml(product.price)}</strong></div>
        <div class="stock-row">
          <div class="stock-label"><span>QTY Available</span><strong>${qtyAvailable} pcs</strong></div>
          <div class="bar"><i style="width:${qtyBar}%"></i></div>
        </div>
        <label class="product-color-field visually-hidden">
          <span>Choose Color</span>
          <select class="product-color-select" data-color-select aria-label="Choose color for ${escapeHtml(product.name)}">
            ${colorOptionsHtml(product)}
          </select>
        </label>
        <div class="swatches" aria-label="Choose color">
          ${colorSwatchesHtml(product)}
        </div>
        <div class="qty-add product-buy-row">
          <div class="qty qty-control" aria-label="Quantity selector">
            <button class="qty-btn" type="button" data-qty-minus aria-label="Decrease quantity">−</button>
            <input class="qty-input" data-qty-input value="1" inputmode="numeric" readonly aria-label="Quantity">
            <button class="qty-btn" type="button" data-qty-plus aria-label="Increase quantity">+</button>
          </div>
          <button class="add-btn add-cart-btn" type="button" data-add-cart data-property-id="${product.id}">Add to Cart</button>
        </div>
        <button class="property-details-btn product-details-link" type="button" data-property-id="${product.id}">More Details</button>
      </div>`;
    offplanGrid.appendChild(card);
    requestAnimationFrame(() => card.classList.add('card-visible'));
  });
  renderPagination(filtered);
}
if (offplanGrid) {
  renderProducts();
  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); currentProductPage = 1; renderProducts(btn.getAttribute('data-filter'));
  }));
}
function escapeHtml(value) { return String(value ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;'); }
function ensureProductModal() {
  let modal = document.getElementById('propertyDetailsModal');
  if (modal) return modal;
  modal = document.createElement('div');
  modal.id = 'propertyDetailsModal'; modal.className = 'property-modal'; modal.setAttribute('aria-hidden','true');
  modal.innerHTML = `<div class="property-modal-backdrop" data-modal-close></div><div class="property-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="propertyModalTitle"><button class="property-modal-close" type="button" aria-label="Close product details" data-modal-close>×</button><div class="property-modal-body" id="propertyModalBody"></div></div>`;
  document.body.appendChild(modal); return modal;
}
function closePropertyModal() { const modal = document.getElementById('propertyDetailsModal'); if (!modal) return; modal.classList.remove('active'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); }
function openPropertyModal(productId) {
  const product = products.find(item => String(item.id) === String(productId)); if (!product) return;
  const modal = ensureProductModal(); const body = modal.querySelector('#propertyModalBody');
  const rows = [['Storage',product.storage],['Color',product.color],['Condition',product.condition],['Battery',product.battery],['Price',product.price],['Reference',product.url]];
  body.innerHTML = `<div class="property-modal-image-wrap"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="property-modal-image"><div class="property-modal-badges"><span>${escapeHtml(product.status)}</span><span>${escapeHtml(product.storage)}</span></div></div><div class="property-modal-content"><div class="property-modal-kicker">Product Details</div><h2 id="propertyModalTitle">${escapeHtml(product.name)}</h2><div class="property-modal-price">${escapeHtml(product.price)}</div><div class="property-modal-specs">${rows.map(([label,value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join('')}</div><div class="property-modal-section"><h3>Description</h3><p>${escapeHtml(product.description)}</p></div><div class="property-modal-section"><h3>Included Support</h3><div class="property-modal-amenities">${String(product.amenities).split(',').map(x=>`<span>${escapeHtml(x.trim())}</span>`).join('')}</div></div><div class="property-modal-contact"><div><span>Store</span><strong>Cougar Electronics</strong><small>Order from the cart when ready</small></div></div></div>`;
  modal.classList.add('active'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open'); modal.querySelector('.property-modal-close')?.focus();
}
function ensureCartDrawer() {
  let drawer = document.getElementById('cougarCartDrawer');
  if (drawer) return drawer;
  drawer = document.createElement('div');
  drawer.id = 'cougarCartDrawer';
  drawer.className = 'cougar-cart-drawer';
  drawer.innerHTML = `
    <div class="cart-panel" aria-label="Shopping cart">
      <div class="cart-panel-header"><strong>Your Cart</strong><button type="button" data-cart-close aria-label="Close cart">×</button></div>
      <div class="cart-panel-items" data-cart-items></div>
      <div class="cart-panel-total" data-cart-total>Total: AED 0</div>
      <a class="cart-checkout-btn" data-cart-checkout href="#" target="_blank" rel="noopener noreferrer">Checkout Now</a>
    </div>`;
  document.body.appendChild(drawer);
  return drawer;
}
function getPriceNumber(product) {
  const raw = String(product.price || '').replace(/[^0-9.]/g, '');
  const value = parseFloat(raw);
  return Number.isFinite(value) ? value : 0;
}
function renderCartDrawer() {
  const drawer = ensureCartDrawer();
  const count = cartItems.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = count; });
  const itemsWrap = drawer.querySelector('[data-cart-items]');
  if (!cartItems.length) {
    itemsWrap.innerHTML = '<p class="cart-empty">Cart is empty.</p>';
  } else {
    itemsWrap.innerHTML = cartItems.map((item, index) => `
      <div class="cart-item">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}">
        <div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.color)} / ${escapeHtml(item.storage)}</span><small>Qty: ${item.qty} • ${escapeHtml(item.price)}</small></div>
        <button type="button" data-cart-remove="${index}" aria-label="Remove item">×</button>
      </div>`).join('');
  }
  const total = cartItems.reduce((sum, item) => sum + getPriceNumber(item) * item.qty, 0);
  drawer.querySelector('[data-cart-total]').textContent = `Total: AED ${total.toLocaleString('en-US')}`;
  const message = cartItems.length
    ? `Hello Cougar Electronics, I want to checkout these items:\n${cartItems.map(item => `- ${item.name} / ${item.storage} / ${item.color} / Qty ${item.qty} / ${item.price}`).join('\n')}\nTotal: AED ${total.toLocaleString('en-US')}`
    : 'Hello Cougar Electronics, I want to order an iPhone.';
  drawer.querySelector('[data-cart-checkout]').href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function openCartDrawer() {
  const drawer = ensureCartDrawer();
  renderCartDrawer();
  drawer.classList.add('active');
}
function bumpCartButton() {
  document.querySelectorAll('.nav-cart-btn').forEach(button => {
    button.classList.remove('cart-bump');
    void button.offsetWidth;
    button.classList.add('cart-bump');
    setTimeout(() => button.classList.remove('cart-bump'), 360);
  });
}
function addToCart(productId, qty, color) {
  const product = products.find(item => String(item.id) === String(productId));
  if (!product) return;
  const existing = cartItems.find(item => item.id === product.id && item.color === color);
  if (existing) {
    existing.qty = Math.min(99, existing.qty + qty);
  } else {
    cartItems.push({ ...product, qty, color });
  }
  renderCartDrawer();
  bumpCartButton();
}
if (offplanGrid || document.querySelector('[data-cart-open]')) renderCartDrawer();


// Robust card controls: direct grid listener keeps Add to Cart, QTY and Details working even with layered card effects.
function handleProductCardControls(event) {
  const target = event.target;
  if (!target || !target.closest) return;

  const swatchButton = target.closest('[data-color-swatch]');
  if (swatchButton && offplanGrid?.contains(swatchButton)) {
    event.preventDefault();
    event.stopPropagation();
    const card = swatchButton.closest('.property-card');
    const selected = swatchButton.dataset.colorSwatch || '';
    card?.querySelectorAll('[data-color-swatch]').forEach(button => button.classList.toggle('active', button === swatchButton));
    const select = card?.querySelector('[data-color-select]');
    if (select) select.value = selected;
    const label = card?.querySelector('.product-color');
    if (label) label.textContent = selected;
    return;
  }

  const minusButton = target.closest('[data-qty-minus]');
  if (minusButton && offplanGrid?.contains(minusButton)) {
    event.preventDefault();
    event.stopPropagation();
    const card = minusButton.closest('.property-card');
    setCardQuantity(card, getCardQuantity(card) - 1);
    return;
  }

  const plusButton = target.closest('[data-qty-plus]');
  if (plusButton && offplanGrid?.contains(plusButton)) {
    event.preventDefault();
    event.stopPropagation();
    const card = plusButton.closest('.property-card');
    setCardQuantity(card, getCardQuantity(card) + 1);
    return;
  }

  const addCartButton = target.closest('[data-add-cart][data-property-id]');
  if (addCartButton && offplanGrid?.contains(addCartButton)) {
    event.preventDefault();
    event.stopPropagation();
    const card = addCartButton.closest('.property-card');
    const color = card?.querySelector('[data-color-select]')?.value || card?.querySelector('[data-color-swatch].active')?.dataset.colorSwatch || '';
    addToCart(addCartButton.dataset.propertyId, getCardQuantity(card), color);
    return;
  }

  const detailsButton = target.closest('.property-details-btn[data-property-id]');
  if (detailsButton && offplanGrid?.contains(detailsButton)) {
    event.preventDefault();
    event.stopPropagation();
    openPropertyModal(detailsButton.dataset.propertyId);
  }
}
if (offplanGrid) {
  offplanGrid.addEventListener('click', handleProductCardControls, true);
  offplanGrid.addEventListener('touchend', handleProductCardControls, true);
}

document.addEventListener('click', event => {
  const swatchButton = event.target.closest('[data-color-swatch]');
  if (swatchButton) {
    const card = swatchButton.closest('.property-card');
    const selected = swatchButton.dataset.colorSwatch || '';
    card?.querySelectorAll('[data-color-swatch]').forEach(button => button.classList.toggle('active', button === swatchButton));
    const select = card?.querySelector('[data-color-select]');
    if (select) select.value = selected;
    const label = card?.querySelector('.product-color');
    if (label) label.textContent = selected;
    return;
  }
  const minusButton = event.target.closest('[data-qty-minus]');
  if (minusButton) {
    const card = minusButton.closest('.property-card');
    setCardQuantity(card, getCardQuantity(card) - 1);
    return;
  }
  const plusButton = event.target.closest('[data-qty-plus]');
  if (plusButton) {
    const card = plusButton.closest('.property-card');
    setCardQuantity(card, getCardQuantity(card) + 1);
    return;
  }
  const addCartButton = event.target.closest('[data-add-cart][data-property-id]');
  if (addCartButton) {
    const card = addCartButton.closest('.property-card');
    const color = card?.querySelector('[data-color-select]')?.value || card?.querySelector('[data-color-swatch].active')?.dataset.colorSwatch || '';
    addToCart(addCartButton.dataset.propertyId, getCardQuantity(card), color);
    return;
  }
  const detailsButton = event.target.closest('.property-details-btn[data-property-id]');
  if (detailsButton) { event.preventDefault(); openPropertyModal(detailsButton.dataset.propertyId); return; }
  if (event.target.closest('[data-modal-close]')) closePropertyModal();
  if (event.target.closest('[data-cart-open]')) { openCartDrawer(); return; }
  if (event.target.closest('[data-cart-close]')) { document.getElementById('cougarCartDrawer')?.classList.remove('active'); return; }
  const removeButton = event.target.closest('[data-cart-remove]');
  if (removeButton) { cartItems.splice(Number(removeButton.dataset.cartRemove), 1); renderCartDrawer(); return; }
});
document.addEventListener('keydown', event => { if (event.key === 'Escape') closePropertyModal(); });



// FINAL MOBILE PRODUCT CONTROL FIX: use pointer/touch coordinates so card buttons work reliably on mobile Safari/Chrome.
(function initMobileProductControlsFix(){
  const grid = document.getElementById('offplanGrid');
  if (!grid) return;
  let lastHandledAt = 0;

  function resolveTarget(event){
    const point = event.changedTouches && event.changedTouches[0] ? event.changedTouches[0] : event;
    if (typeof point.clientX === 'number' && typeof point.clientY === 'number') {
      const underFinger = document.elementFromPoint(point.clientX, point.clientY);
      if (underFinger) return underFinger;
    }
    return event.target;
  }

  function handle(event){
    const now = Date.now();
    if (event.type === 'click' && now - lastHandledAt < 450) return;

    let target = resolveTarget(event);
    if (!target || !target.closest || !grid.contains(target)) return;

    const control = target.closest('[data-color-swatch], [data-qty-minus], [data-qty-plus], [data-add-cart][data-property-id], .property-details-btn[data-property-id]');
    if (!control || !grid.contains(control)) return;

    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();
    lastHandledAt = now;

    const card = control.closest('.property-card');
    if (!card) return;

    if (control.matches('[data-color-swatch]')) {
      const selected = control.dataset.colorSwatch || '';
      card.querySelectorAll('[data-color-swatch]').forEach(button => button.classList.toggle('active', button === control));
      const select = card.querySelector('[data-color-select]');
      if (select) select.value = selected;
      const label = card.querySelector('.product-color');
      if (label) label.textContent = selected;
      return;
    }

    if (control.matches('[data-qty-minus]')) {
      setCardQuantity(card, getCardQuantity(card) - 1);
      return;
    }

    if (control.matches('[data-qty-plus]')) {
      setCardQuantity(card, getCardQuantity(card) + 1);
      return;
    }

    if (control.matches('[data-add-cart][data-property-id]')) {
      const color = card.querySelector('[data-color-select]')?.value || card.querySelector('[data-color-swatch].active')?.dataset.colorSwatch || '';
      addToCart(control.dataset.propertyId, getCardQuantity(card), color);
      return;
    }

    if (control.matches('.property-details-btn[data-property-id]')) {
      openPropertyModal(control.dataset.propertyId);
    }
  }

  grid.addEventListener('pointerup', handle, true);
  grid.addEventListener('touchend', handle, {capture:true, passive:false});
  grid.addEventListener('click', handle, true);
})();



// ABSOLUTE FINAL MOBILE CARD BUTTON FIX: capture card controls at document level before card/layout layers can block them.
(function initFinalMobileCardButtonFix(){
  const grid = document.getElementById('offplanGrid');
  if (!grid) return;

  let lastKey = '';
  let lastTime = 0;

  function findControl(event) {
    const target = event.target;
    if (target && target.closest) {
      const direct = target.closest('[data-color-swatch], [data-qty-minus], [data-qty-plus], [data-add-cart][data-property-id], .property-details-btn[data-property-id]');
      if (direct && grid.contains(direct)) return direct;
    }

    const point = event.changedTouches && event.changedTouches[0] ? event.changedTouches[0] : event;
    if (typeof point.clientX === 'number' && typeof point.clientY === 'number') {
      let el = document.elementFromPoint(point.clientX, point.clientY);
      if (el && el.closest) {
        const byPoint = el.closest('[data-color-swatch], [data-qty-minus], [data-qty-plus], [data-add-cart][data-property-id], .property-details-btn[data-property-id]');
        if (byPoint && grid.contains(byPoint)) return byPoint;
      }
    }
    return null;
  }

  function runControl(control) {
    const card = control.closest('.property-card');
    if (!card) return;

    if (control.matches('[data-color-swatch]')) {
      const selected = control.dataset.colorSwatch || '';
      card.querySelectorAll('[data-color-swatch]').forEach(button => button.classList.toggle('active', button === control));
      const select = card.querySelector('[data-color-select]');
      if (select) select.value = selected;
      const label = card.querySelector('.product-color');
      if (label) label.textContent = selected;
      return;
    }

    if (control.matches('[data-qty-minus]')) {
      setCardQuantity(card, getCardQuantity(card) - 1);
      return;
    }

    if (control.matches('[data-qty-plus]')) {
      setCardQuantity(card, getCardQuantity(card) + 1);
      return;
    }

    if (control.matches('[data-add-cart][data-property-id]')) {
      const color = card.querySelector('[data-color-select]')?.value || card.querySelector('[data-color-swatch].active')?.dataset.colorSwatch || '';
      addToCart(control.dataset.propertyId, getCardQuantity(card), color);
      return;
    }

    if (control.matches('.property-details-btn[data-property-id]')) {
      openPropertyModal(control.dataset.propertyId);
    }
  }

  function handler(event) {
    const control = findControl(event);
    if (!control) return;

    const key = `${event.type}:${control.dataset.propertyId || control.dataset.colorSwatch || control.textContent.trim()}`;
    const now = Date.now();
    if ((event.type === 'click' || event.type === 'touchend') && key === lastKey && now - lastTime < 520) {
      event.preventDefault();
      event.stopPropagation();
      if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      return;
    }

    lastKey = key;
    lastTime = now;
    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();
    runControl(control);
  }

  document.addEventListener('pointerup', handler, true);
  document.addEventListener('touchend', handler, { capture: true, passive: false });
  document.addEventListener('click', handler, true);
})();

// Scroll animations
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); }); }, {threshold:.08, rootMargin:'0px 0px -12% 0px'});
document.querySelectorAll('.home-reveal, .reveal-item, .glass-card, .contact-detail, .policy-box, .value-card, .process-card, .section-header, .cta .container').forEach(el => observer.observe(el));

// News ticker
(function initNewsTicker() {
  document.querySelectorAll('[data-news-strip]').forEach(strip => {
    const track = strip.querySelector('[data-news-track]'); if (!track || track.dataset.ready === 'true') return;
    Array.from(track.children).forEach(item => track.appendChild(item.cloneNode(true))); track.dataset.ready = 'true';
    const resetAnimation = () => { track.style.animation = 'none'; track.offsetHeight; track.style.animation = ''; };
    strip.querySelector('[data-news-next]')?.addEventListener('click', () => { if (track.firstElementChild) track.appendChild(track.firstElementChild); resetAnimation(); });
    strip.querySelector('[data-news-prev]')?.addEventListener('click', () => { if (track.lastElementChild) track.insertBefore(track.lastElementChild, track.firstElementChild); resetAnimation(); });
    strip.querySelector('[data-news-toggle]')?.addEventListener('click', event => { const paused = strip.classList.toggle('is-paused'); event.currentTarget.textContent = paused ? '▶' : 'Ⅱ'; });
  });
})();

// PWA
if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {})); }

// Splash loader
(() => {
  const splash = document.getElementById('appSplash');
  if (!splash) return;
  if (window.location.hash === '#offplan') { splash.remove(); return; }

  const progressBar = splash.querySelector('[data-splash-progress]');
  const percentText = splash.querySelector('[data-splash-percent]');
  const start = performance.now();
  const minDisplayTime = 1800;
  let value = 0;
  let loaded = document.readyState === 'complete';
  let hidden = false;

  const setProgress = nextValue => {
    value = Math.max(value, Math.min(100, Math.round(nextValue)));
    if (progressBar) progressBar.style.width = `${value}%`;
    if (percentText) percentText.textContent = `${value}%`;
  };

  const finishSplash = () => {
    if (hidden) return;
    hidden = true;
    setProgress(100);
    const delay = Math.max(0, minDisplayTime - (performance.now() - start));
    setTimeout(() => {
      splash.classList.add('hide');
      setTimeout(() => splash.remove(), 750);
    }, delay);
  };

  const timer = setInterval(() => {
    if (hidden) { clearInterval(timer); return; }
    const target = loaded ? 100 : Math.min(94, value + Math.random() * 8 + 2);
    setProgress(target);
    if (loaded && value >= 100) {
      clearInterval(timer);
      finishSplash();
    }
  }, 95);

  window.addEventListener('load', () => {
    loaded = true;
    setProgress(Math.max(value, 96));
    setTimeout(finishSplash, 280);
  });

  setTimeout(() => {
    loaded = true;
    finishSplash();
  }, 4200);
})();
