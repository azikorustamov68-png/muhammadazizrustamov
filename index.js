/* =========================================================
   1. INTRO / LOADING ANIMATSIYASI
========================================================= */
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.getElementById('introLoader');
        if (loader) loader.classList.add('hide');
    }, 850);

    // Sana maydoniga bugungi sanani minimal qilib qo'yish
    const dateInput = document.getElementById('patientDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }

    initScrollReveal();
    initCounters();
});

/* =========================================================
   2. NAVBAR SCROLL VA MOBIL HAMBURGER MENYU
========================================================= */
const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* =========================================================
   3. RAQAMLAR ANIMATSIYASI (COUNTERS)
========================================================= */
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    let started = false;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !started) {
            started = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 1600;
                const stepTime = 20;
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target.toLocaleString('uz-UZ');
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current).toLocaleString('uz-UZ');
                    }
                }, stepTime);
            });
        }
    }, { threshold: 0.4 });

    const metricsSection = document.getElementById('metricsSection');
    if (metricsSection) observer.observe(metricsSection);
}

/* =========================================================
   4. XIZMATLAR FILTRI (TABS)
========================================================= */
const serviceTabs = document.querySelectorAll('.s-tab');
const serviceCards = document.querySelectorAll('.service-card');

serviceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        serviceTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const selected = tab.getAttribute('data-service');
        serviceCards.forEach(card => {
            if (selected === 'all' || card.getAttribute('data-category') === selected) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/* =========================================================
   5. GLOBAL QIDIRUV FUNKSIYASI
========================================================= */
const searchData = [
    { title: "Tish davolash (Terapiya)", desc: "Kariyes, pulpit va estetik plombalar — 250 000 so‘mdan", link: "#xizmatlar" },
    { title: "Tish oqartirish va Air-Flow tozalash", desc: "LED oqartirish va tish toshlarini tozalash — 300 000 so‘mdan", link: "#xizmatlar" },
    { title: "Tish implantatsiyasi", desc: "3D rejalashtirish va titan implantlar — 3 200 000 so‘mdan", link: "#xizmatlar" },
    { title: "Breketlar va Elaynerlar", desc: "Tish qatorlarini tekislash tizimlari — 3 500 000 so‘mdan", link: "#xizmatlar" },
    { title: "Bolalar stomatologiyasi", desc: "Sut tishlarini qo‘rquvsiz davolash — 180 000 so‘mdan", link: "#xizmatlar" },
    { title: "Birlamchi ko‘rik va konsultatsiya", desc: "Shifokor ko‘rigi va diagnostika — Bepul", link: "#narxlar" },
    { title: "Andijondagi manzil va telefon", desc: "Andijon shahri, Bobur shoh ko‘chasi, 28 • +998 90 123-45-67", link: "#aloqa" },
    { title: "Savol-javob (FAQ)", desc: "Og‘riqsiz davolash va sterillik kafolati haqida", link: "#savol-javob" }
];

const searchOverlay = document.getElementById('searchOverlay');
const openSearchBtn = document.getElementById('openSearchBtn');
const closeSearchBtn = document.getElementById('closeSearchBtn');
const globalSearchInput = document.getElementById('globalSearchInput');
const searchResults = document.getElementById('searchResults');

openSearchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => globalSearchInput.focus(), 100);
});

closeSearchBtn.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});

searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
    }
});

globalSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
        searchResults.innerHTML = '<p class="search-hint">Qidirish uchun kalit so‘z yozing...</p>';
        return;
    }

    const matches = searchData.filter(item =>
        item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        searchResults.innerHTML = '<p class="search-hint">Hech narsa topilmadi. Boshqa so‘z yozib ko‘ring.</p>';
        return;
    }

    searchResults.innerHTML = matches.map(item => `
        <a href="${item.link}" class="search-item" onclick="document.getElementById('searchOverlay').classList.remove('active')">
            <strong>${item.title}</strong>
            <span>${item.desc}</span>
        </a>
    `).join('');
});

/* =========================================================
   6. MIJOZLAR FIKRLARI KARUSELI
========================================================= */
const reviewTrack = document.getElementById('reviewTrack');
const slides = document.querySelectorAll('.review-slide');
let currentSlide = 0;

function updateReviewCarousel() {
    reviewTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.getElementById('nextReview').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateReviewCarousel();
});

document.getElementById('prevReview').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateReviewCarousel();
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateReviewCarousel();
}, 6500);

/* =========================================================
   7. SAVOL-JAVOB (FAQ) AKKORDEONI
========================================================= */
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const currentItem = btn.parentElement;
        const isActive = currentItem.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
        if (!isActive) {
            currentItem.classList.add('active');
        }
    });
});

/* =========================================================
   8. ONLAYN QABULGA YOZILISH (DEMO REJIM — YOLG'ON XABARSIZ)
========================================================= */
const bookingForm = document.getElementById('bookingForm');
const demoReceipt = document.getElementById('demoReceipt');
const receiptData = document.getElementById('receiptData');
const sendViaTelegramBtn = document.getElementById('sendViaTelegramBtn');
const patientServiceSelect = document.getElementById('patientService');

// Boshqa tugmalardan "Qabulga yozilish" bosilganda formaga olib o'tish va xizmatni tanlash
document.querySelectorAll('.open-booking-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const chosenService = btn.getAttribute('data-selected');
        if (chosenService && patientServiceSelect) {
            patientServiceSelect.value = chosenService;
        }
        document.getElementById('qabulPanel').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => document.getElementById('patientName').focus(), 600);
    });
});

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('patientName').value.trim();
    const phone = document.getElementById('patientPhone').value.trim();
    const service = patientServiceSelect.value;
    const date = document.getElementById('patientDate').value;
    const time = document.getElementById('patientTime').value;

    const appointmentObj = { name, phone, service, date, time, mode: "DEMO_LOCAL" };
    localStorage.setItem('mega_stom_demo_booking', JSON.stringify(appointmentObj));

    receiptData.innerHTML = `
        <div><strong>Bemor:</strong> ${name}</div>
        <div><strong>Telefon:</strong> ${phone}</div>
        <div><strong>Xizmat:</strong> ${service}</div>
        <div><strong>Sana va vaqt:</strong> ${date}, soat ${time}</div>
        <div><strong>Holat:</strong> Lokal demo ko‘rinish (serverga ulanmagan)</div>
    `;

    const tgMessage = `Assalomu alaykum! MEGA STOMATOLOGIYA (Andijon) qabuliga yozilmoqchiman:\n\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n🦷 Xizmat: ${service}\n📅 Sana: ${date}\n⏰ Vaqt: ${time}`;
    sendViaTelegramBtn.href = `https://t.me/megastomatologiya_andijon?text=${encodeURIComponent(tgMessage)}`;

    bookingForm.classList.add('hidden');
    demoReceipt.classList.remove('hidden');
});

document.getElementById('resetBookingBtn').addEventListener('click', () => {
    bookingForm.reset();
    demoReceipt.classList.add('hidden');
    bookingForm.classList.remove('hidden');
});

/* =========================================================
   9. SCROLL REVEAL ANIMATSIYASI
========================================================= */
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