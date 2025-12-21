// 1. Menangani Hamburger Menu (Mobile)
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-toggle'); 
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }
});

// 2. Menangani fungsi klik tombol Scroll to Top
document.getElementById('scroll-to-top')?.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

// 3. Menangani pengiriman form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    const nameInput = this.querySelector('input[name="name"]');
    const name = nameInput ? nameInput.value : "Pengunjung";
    
    alert(`Terima kasih ${name}, pesan Anda sedang dikirim!`);
});

// 4. Efek Scroll (Navbar, Tombol Scroll to Top, dan Menu Aktif)
window.addEventListener('scroll', function() {
    // A. Shadow Navbar
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
    } else {
        nav.classList.remove('shadow-md');
    }

    // B. Tombol Scroll to Top
    const scrollBtn = document.getElementById('scroll-to-top');
    if (scrollBtn) {
        scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }

    // C. DETEKSI MENU AKTIF (ScrollSpy)
    let current = "";
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav a");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Gunakan toleransi 150 agar perpindahan warna lebih akurat
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((a) => {
        // 1. Hapus SEMUA gaya aktif dan border dari semua tombol tanpa terkecuali
        a.classList.remove("bg-purple-600", "text-white", "border", "border-purple-600", "text-purple-600");
        
        const href = a.getAttribute("href");

        // 2. Jika ID section saat ini cocok dengan link (misal: current adalah "contact" dan href adalah "#contact")
        if (current && href === `#${current}`) {
            // Berikan gaya ungu penuh
            a.classList.add("bg-purple-600", "text-white");
        } 
    });
});