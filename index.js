/* =========================================================
   1. MAHSULOTLAR MA'LUMOTLAR BAZASI (100% O'ZBEK TILIDA)
========================================================= */
const menuItems = [
    // BURGERLAR
    {
        id: 1,
        name: "MEGA Double Cheeseburger",
        category: "burgerlar",
        price: 38000,
        description: "Ikki qavat shirador mol go‘shti kotleti, eritilgan Cheddar pishlog‘i, tuzlangan bodring va maxsus Mega sous.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Andijon Grill Burger",
        category: "burgerlar",
        price: 34000,
        description: "Ko‘mirda pishirilgan mol go‘shti, qizil piyoz halqalari, barra pomidor, salat bargi va barbekyu sousi.",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Crispy Chicken Burger",
        category: "burgerlar",
        price: 29000,
        description: "Qarsildoq qobiqda qovurilgan tovuq filesi, mayin sarimsoqli sous va yangi sabzavotlar.",
        image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80"
    },

    // LAVASHLAR
    {
        id: 4,
        name: "Tandir Go‘shtli Lavash",
        category: "lavashlar",
        price: 32000,
        description: "Tandirda qizartirilgan yupqa xamir, mol go‘shti bo‘laklari, pomidor, bodring, chipslar va firma sousi.",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Pishloqli Tovuq Lavash",
        category: "lavashlar",
        price: 30000,
        description: "Grilda pishgan tovuq go‘shti, ko‘p miqdorda eritilgan pishloq, barra sabzavotlar va qaymoqli sous.",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80"
    },

    // PITSALAR
    {
        id: 6,
        name: "Pepperoni Premium Pitsa (33 sm)",
        category: "pitsalar",
        price: 68000,
        description: "Dudlangan mol go‘shtli kolbasa, haqiqiy Motsarella pishlog‘i va italyan pomidor sousi.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Mega Assorti Pitsa (33 sm)",
        category: "pitsalar",
        price: 75000,
        description: "Mol go‘shti, tovuq go‘shti, qo‘ziqorin, zaytun, bulg‘or qalampiri va ikki hissa pishloq.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },

    // HOT-DOGLAR
    {
        id: 8,
        name: "Qirollik Hot-Dog",
        category: "hotdoglar",
        price: 22000,
        description: "Yumshoq bulochka, ikkita dudlangan sosiska, karam salati, pishloqli va xantalli souslar.",
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Chili Hot-Dog",
        category: "hotdoglar",
        price: 24000,
        description: "Achchiq ta’mni sevuvchilar uchun jalapeno qalampiri, mol go‘shtli sosiska va maxsus achchiq sous.",
        image: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80"
    },

    // FRI KARTOSHKALARI
    {
        id: 10,
        name: "Katta Kartoshka Fri",
        category: "fri",
        price: 16000,
        description: "Tashqarisi qarsildoq, ichi yumshoq qilib oltin rangda qovurilgan saralangan kartoshka.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Pishloqli va Go‘shtli Fri",
        category: "fri",
        price: 25000,
        description: "Issiq kartoshka fri ustida eritilgan Cheddar pishlog‘i va qovurilgan qiyma bo‘laklari.",
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80"
    },

    // ICHIMLIKLAR
    {
        id: 12,
        name: "Muzdek Moxito (0.5 L)",
        category: "ichimliklar",
        price: 15000,
        description: "Yangi yalpiz barglari, laym bo‘laklari, muz va tetiklantiruvchi gazlangan ichimlik.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "Coca-Cola (0.5 L)",
        category: "ichimliklar",
        price: 10000,
        description: "Taomlar bilan ajoyib uyg‘unlashuvchi muzdek gazlangan ichimlik.",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
    }
];

/* =========================================================
   2. HOLAT (STATE) VA LOCALSTORAGE
========================================================= */
let cart = JSON.parse(localStorage.getItem('mega_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('mega_favs')) || [];
let currentCategory = 'all';
let searchQuery = '';
const DELIVERY_FEE = 10000;

/* =========================================================
   3. DOM ELEMENTLARI
========================================================= */
const productsGrid = document.getElementById('productsGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const categoryBtns = document.querySelectorAll('.cat-btn');

const cartDrawer = document.getElementById('cartDrawer');
const favDrawer = document.getElementById('favDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const favItemsContainer = document.getElementById('favItemsContainer');
const cartCountEl = document.getElementById('cartCount');
const favCountEl = document.getElementById('favCount');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const cartFooter = document.getElementById('cartFooter');

const checkoutModal = document.getElementById('checkoutModal');
const modalFinalTotal = document.getElementById('modalFinalTotal');
const telegramOrderLink = document.getElementById('telegramOrderLink');

/* =========================================================
   4. SAHIFA YUKLANGANDA ISHGA TUSHADIGAN FUNKSIYALAR
========================================================= */
window.addEventListener('DOMContentLoaded', () => {
    // Preloader yopilishi
    setTimeout(() => {
        document.getElementById('preloader').classList.add('fade-out');
    }, 900);

    renderProducts();
    updateCartUI();
    updateFavUI();
    initScrollReveal();
});

// Narxni chiroyli formatlash (masalan: 38 000 so'm)
function formatPrice(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
}

// Bildirishnoma (Toast) ko'rsatish
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/* =========================================================
   5. MENYU MAHSULOTLARINI CHIZISH VA FILTRLASH
========================================================= */
function renderProducts() {
    const filtered = menuItems.filter(item => {
        const matchesCat = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    productsGrid.innerHTML = '';

    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    filtered.forEach(item => {
        const isFav = favorites.includes(item.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-box">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${item.id})" title="Sevimlilarga qo‘shish">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <span class="category-tag">${item.category}</span>
            </div>
            <div class="product-body">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(item.price)}</span>
                    <button class="add-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fa-solid fa-cart-plus"></i> Savatga
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Kategoriya tugmalari
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderProducts();
    });
});

// Footerdan bosilganda filtr
function filterFromFooter(category) {
    categoryBtns.forEach(b => {
        b.classList.toggle('active', b.dataset.category === category);
    });
    currentCategory = category;
    renderProducts();
}

// Qidiruv inputi
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    renderProducts();
});

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderProducts();
});

function resetFilters() {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    currentCategory = 'all';
    categoryBtns.forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));
    renderProducts();
}

/* =========================================================
   6. SAVATCHA (CART) FUNKSIYALARI
========================================================= */
function saveCart() {
    localStorage.setItem('mega_cart', JSON.stringify(cart));
}

function addToCart(id) {
    const product = menuItems.find(item => item.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`"${product.name}" savatchaga qo‘shildi!`);
}

// Aksiya setlarini savatga qo'shish
function addPromoToCart(name, price, image) {
    const promoId = name.length * 100;
    const existing = cart.find(item => item.id === promoId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: promoId, name, price, image, qty: 1 });
    }
    saveCart();
    updateCartUI();
    openDrawer(cartDrawer);
    showToast(`Aksiya: "${name}" savatga qo‘shildi!`);
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
    showToast("Mahsulot savatchadan o‘chirildi");
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = totalCount;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-bag-shopping"></i>
                <h4>Savatchangiz hozircha bo‘sh</h4>
                <p>Menyudan mazali taomlarni tanlang!</p>
            </div>
        `;
        cartFooter.classList.add('hidden');
        return;
    }

    cartFooter.classList.remove('hidden');
    cartItemsContainer.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span>${formatPrice(item.price * item.qty)}</span>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="O‘chirish">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(div);
    });

    const grandTotal = subtotal + DELIVERY_FEE;
    cartTotalAmount.textContent = formatPrice(grandTotal);
    modalFinalTotal.textContent = formatPrice(grandTotal);
}

/* =========================================================
   7. SEVIMLILAR (FAVORITES) FUNKSIYALARI
========================================================= */
function toggleFavorite(id) {
    const product = menuItems.find(item => item.id === id);
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        showToast(`"${product.name}" sevimlilardan olib tashlandi`);
    } else {
        favorites.push(id);
        showToast(`"${product.name}" sevimlilarga qo‘shildi ❤️`);
    }
    localStorage.setItem('mega_favs', JSON.stringify(favorites));
    renderProducts();
    updateFavUI();
}

function updateFavUI() {
    favCountEl.textContent = favorites.length;

    if (favorites.length === 0) {
        favItemsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-heart"></i>
                <h4>Sevimli taomlar yo‘q</h4>
                <p>Yoqtirgan taomlaringizdagi yurakcha belgisini bosing.</p>
            </div>
        `;
        return;
    }

    favItemsContainer.innerHTML = '';
    favorites.forEach(id => {
        const item = menuItems.find(p => p.id === id);
        if (!item) return;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span>${formatPrice(item.price)}</span>
                <div style="margin-top:8px;">
                    <button class="add-cart-btn" style="padding:6px 14px; font-size:0.78rem;" onclick="addToCart(${item.id})">
                        Savatga qo‘shish
                    </button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="toggleFavorite(${item.id})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        favItemsContainer.appendChild(div);
    });
}

/* =========================================================
   8. DRAWER VA MODAL BOSHQARUVI
========================================================= */
function openDrawer(drawer) {
    closeAllDrawers();
    drawer.classList.add('active');
    drawerOverlay.classList.add('active');
}

function closeAllDrawers() {
    cartDrawer.classList.remove('active');
    favDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
}

document.getElementById('cartToggleBtn').addEventListener('click', () => openDrawer(cartDrawer));
document.getElementById('favToggleBtn').addEventListener('click', () => openDrawer(favDrawer));
document.getElementById('closeCartBtn').addEventListener('click', closeAllDrawers);
document.getElementById('closeFavBtn').addEventListener('click', closeAllDrawers);
drawerOverlay.addEventListener('click', closeAllDrawers);

// Buyurtma modalini ochish
document.getElementById('openCheckoutBtn').addEventListener('click', () => {
    closeAllDrawers();
    updateTelegramLink();
    checkoutModal.classList.add('active');
});

document.getElementById('closeCheckoutModal').addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

// Telegram orqali tayyor xabar havolasini shakllantirish
function updateTelegramLink() {
    let text = "🍔 *YANGI BUYURTMA (MEGA FAST FOOD)*\n\n";
    cart.forEach((item, index) => {
        text += `${index + 1}. ${item.name} x ${item.qty} = ${formatPrice(item.price * item.qty)}\n`;
    });
    const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    text += `\n🚚 Yetkazish: ${formatPrice(DELIVERY_FEE)}`;
    text += `\n💰 *JAMI: ${formatPrice(subtotal + DELIVERY_FEE)}*`;
    telegramOrderLink.href = `https://t.me/megafastfood_andijon?text=${encodeURIComponent(text)}`;
}

// Buyurtmani tasdiqlash formasi
document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('orderName').value;
    const phone = document.getElementById('orderPhone').value;
    const address = document.getElementById('orderAddress').value;

    checkoutModal.classList.remove('active');
    cart = [];
    saveCart();
    updateCartUI();
    e.target.reset();

    alert(`Rahmat, ${name}! Sizning buyurtmangiz qabul qilindi.\n\nOperatorimiz tez orada ${phone} raqamiga qo‘ng‘iroq qiladi va buyurtmangiz Andijon shahri, "${address}" manziliga yetkaziladi!`);
});

// Aloqa formasi
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    showToast(`Rahmat, ${name}! Xabaringiz muvaffaqiyatli yuborildi.`);
    e.target.reset();
});

/* =========================================================
   9. AKSIYALAR KARUSELI VA MOBIL MENYU
========================================================= */
let promoIndex = 0;
const promoTrack = document.getElementById('promoTrack');
const totalPromos = document.querySelectorAll('.promo-card').length;

function updateCarousel() {
    promoTrack.style.transform = `translateX(-${promoIndex * 100}%)`;
}

document.getElementById('nextPromo').addEventListener('click', () => {
    promoIndex = (promoIndex + 1) % totalPromos;
    updateCarousel();
});

document.getElementById('prevPromo').addEventListener('click', () => {
    promoIndex = (promoIndex - 1 + totalPromos) % totalPromos;
    updateCarousel();
});

// Avtomatik karusel aylanishi
setInterval(() => {
    promoIndex = (promoIndex + 1) % totalPromos;
    updateCarousel();
}, 6000);

// Mobil Hamburger Menyu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effekti
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll Reveal Animatsiya
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
}