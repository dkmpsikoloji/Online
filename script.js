<script>
const siteConfig = {
    whatsappNumber: "905064279578",
    whatsappLink: "https://wa.me/905432783027",
    instagramLink: "https://www.instagram.com/klinikpsikologderyamuglu?igsh=MXhhMmpvNjlwNXphag%3D%3D&utm_source=qr",
    linkedinLink: "https://www.linkedin.com/in/derya-mu%C4%9Flu-a08531201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    facebookLink: "https://facebook.com/deryamuglu",
    primaryEmail: "dkmpisikoloji@gmail.com",
    contactPhone: "+90 506 427 95 78",
    location: "Kocaeli, Türkiye",
    workingHours: "Pazartesi-Cuma: 09:00-18:00<br>Cumartesi: 09:00-14:00",
    businessName: "Uzman Klinik Psikolog Derya Karakulak Muğlu",
    businessTagline: "Profesyonel psikolojik destek • Kocaeli • Online terapi seçeneği mevcut",
    pageTitle: "Uzman Klinik Psikolog Karakulak Derya Muğlu | DKMPsikoloji",
    metaDescription: "Uzman Klinik Psikolog Derya Karakulak Muğlu | Kocaeli'de bireysel, çift, çocuk psikolojisi ve online terapi hizmetleri.",
    metaAuthor: "Derya Karakulak Muğlu",
    ogTitle: "Derya Karakulak Muğlu | Uzman Klinik Psikolog",
    ogDescription: "Kocaeli'de bireysel ve online terapi hizmetleri - EMDR, BDT, Travma Terapisi ve daha fazlası.",
    ogUrl: "https://dkmpsikoloji.github.io/",
    ogImage: "https://dkmpsikoloji.github.io/assets/og-image.jpg",
    twitterTitle: "Uzman Klinik Psikolog Derya Karakulak Muğlu",
    twitterDescription: "Psikolojik destek, terapi ve danışmanlık. Kocaeli ve online hizmet.",
    twitterImage: "https://dkmpsikoloji.github.io/assets/og-image.jpg",
    canonicalUrl: "https://dkmpsikoloji.github.io/"
};

window.onload = function () {
    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = value;
    };
    const setAttr = (id, attr, value) => {
        const el = document.getElementById(id);
        if (el) el.setAttribute(attr, value);
    };

    // Sayfa başlığı ve meta etiketleri
    document.title = siteConfig.pageTitle;
    setAttr("page-title", "textContent", siteConfig.pageTitle); // optional
    setAttr("meta-description", "content", siteConfig.metaDescription);
    setAttr("meta-author", "content", siteConfig.metaAuthor);
    setAttr("og-title", "content", siteConfig.ogTitle);
    setAttr("og-description", "content", siteConfig.ogDescription);
    setAttr("og-url", "content", siteConfig.ogUrl);
    setAttr("og-image", "content", siteConfig.ogImage);
    setAttr("twitter-title", "content", siteConfig.twitterTitle);
    setAttr("twitter-description", "content", siteConfig.twitterDescription);
    setAttr("twitter-image", "content", siteConfig.twitterImage);
    setAttr("canonical-url", "href", siteConfig.canonicalUrl);

    // Logo ve hero alanları
    setText("logo-text", siteConfig.businessName);
    setText("hero-title", siteConfig.businessName);
    setText("hero-description", "Zihinsel sağlığınız için profesyonel destek ve kişisel gelişim yolculuğunuzda güvenilir rehberlik");
    setAttr("hero-whatsapp-btn", "href", siteConfig.whatsappLink);

    // Hakkımda bölümü (değişken değil ama dinamik yapılabilir)
    setText("about-title", siteConfig.businessName);

    // İletişim bölümü
    setText("contact-phone", siteConfig.contactPhone);
    setText("contact-email", siteConfig.primaryEmail);
    setText("contact-location", siteConfig.location);
    setText("contact-hours", siteConfig.workingHours);
    setText("online-therapy-note", "Online Terapi Seçeneği Mevcuttur");

    // Footer içerikleri
    setAttr("footer-whatsapp", "href", siteConfig.whatsappLink);
    setAttr("footer-instagram", "href", siteConfig.instagramLink);
    setAttr("footer-linkedin", "href", siteConfig.linkedinLink);
    setAttr("footer-facebook", "href", siteConfig.facebookLink);
    setAttr("footer-email", "href", "mailto:" + siteConfig.primaryEmail);

    setAttr("contact-whatsapp", "href", siteConfig.whatsappLink);
    setAttr("contact-instagram", "href", siteConfig.instagramLink);
    setAttr("contact-linkedin", "href", siteConfig.linkedinLink);
    setAttr("contact-facebook", "href", siteConfig.facebookLink);
    setAttr("contact-email-link", "href", "mailto:" + siteConfig.primaryEmail);

    setText("copyright-text", `© 2025 ${siteConfig.businessName}. Tüm hakları saklıdır.`);
    setText("footer-tagline", siteConfig.businessTagline);
    setText("footer-privacy", "Gizlilik ve etik kurallar çerçevesinde hizmet verilmektedir");

    // WhatsApp Float
    setAttr("whatsapp-float-btn", "href", siteConfig.whatsappLink);
};
</script>


// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const privacy = document.getElementById('privacy').checked;
    
    if (name && email && privacy) {
        // Show success message
        alert('✅ Randevu talebiniz başarıyla gönderildi!\n\n24 saat içinde size dönüş yapacağım.\n\nAcil durumlar için WhatsApp: +90 555 123 45 67');
        this.reset();
        
        // Optionally redirect to WhatsApp with pre-filled message
        const whatsappMessage = `Merhaba Derya Hanım, web sitesinden randevu talebi gönderdim. Adım: ${name}`;
        const whatsappUrl = `https://wa.me/905064279578?text=${encodeURIComponent(whatsappMessage)}`;
        
        if (confirm('WhatsApp üzerinden de hemen iletişime geçmek ister misiniz?')) {
            window.open(whatsappUrl, '_blank');
        }
    } else {
        alert('❌ Lütfen zorunlu alanları doldurun ve gizlilik sözleşmesini kabul edin.');
    }
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-10px) scale(1)';
    });
});

// Testimonial cards animation
document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Gallery item hover effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(1deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});

// WhatsApp float button pulse effect
setInterval(() => {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    whatsappBtn.style.boxShadow = '0 0 20px rgba(37, 211, 102, 0.8)';
    setTimeout(() => {
        whatsappBtn.style.boxShadow = '2px 2px 20px rgba(0,0,0,.2)';
    }, 1000);
}, 5000);

// Add click tracking for social media links
document.querySelectorAll('.social-icon, .footer-social-links a').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Social media link clicked:', this.getAttribute('title') || this.href);
    });
});

// Emergency contact alert
function showEmergencyInfo() {
    alert('🚨 ACİL DURUM BİLGİSİ 🚨\n\nEğer kendine zarar verme düşüncen varsa:\n\n• Acil Servis: 112\n• İntihar Önleme Hattı: 182\n• WhatsApp: +90 555 123 45 67\n\nSen değerlisin ve yalnız değilsin! 💙');
}

// Add emergency button (optional)
const emergencyBtn = document.createElement('div');
emergencyBtn.innerHTML = '🆘';
emergencyBtn.style.cssText = `
    position: fixed;
    bottom: 40px;
    left: 40px;
    width: 50px;
    height: 50px;
    background: #ff4757;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 20px;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(255, 71, 87, 0.4);
    transition: all 0.3s ease;
`;
emergencyBtn.onclick = showEmergencyInfo;
emergencyBtn.title = 'Acil Durum Yardımı';
document.body.appendChild(emergencyBtn);
