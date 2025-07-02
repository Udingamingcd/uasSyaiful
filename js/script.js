document.addEventListener('DOMContentLoaded', function() {
    // Efek scroll halus untuk semua link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animasi saat scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.widget-box, article');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    const widgetBoxes = document.querySelectorAll('.widget-box, article');
    widgetBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Efek hover untuk tombol
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.cursor = 'default';
        });
    });
});
    // Planet card toggle functionality
    const planetCards = document.querySelectorAll('.planet-card');
    
    planetCards.forEach(card => {
        card.addEventListener('click', function() {
            // Close all other open cards first
            planetCards.forEach(otherCard => {
                if (otherCard !== this && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                    otherCard.querySelector('.planet-detail').classList.remove('active');
                }
            });
            
            // Toggle current card
            this.classList.toggle('active');
            const detail = this.querySelector('.planet-detail');
            detail.classList.toggle('active');
        });
    });
        // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = 'Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.';
            formMessage.style.display = 'block';
            formMessage.style.backgroundColor = '#2a5a2a';
            formMessage.style.color = '#ffffff';
            formMessage.style.padding = '15px';
            formMessage.style.borderRadius = '4px';
            formMessage.style.marginTop = '20px';
            
            // Reset form
            this.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
function updateJamRealTime() {
    const hariNama = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const now = new Date();

    // Ambil hari, jam, menit, detik sekarang
    const hari = hariNama[now.getDay()];
    const jam = String(now.getHours()).padStart(2, '0');
    const menit = String(now.getMinutes()).padStart(2, '0');
    const detik = String(now.getSeconds()).padStart(2, '0');

    // Format output
    const waktuString = `${hari}, ${jam}:${menit}:${detik}`;

    // Tampilkan di elemen dengan id jamRealTime
    document.getElementById('jamRealTime').textContent = `Waktu Sekarang: ${waktuString}`;
}

// Update tiap 1 detik
setInterval(updateJamRealTime, 1000);

// Jalankan segera saat halaman dibuka
updateJamRealTime();
// Membuat bintang secara acak
const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 2 + 1) + 's';
    starsContainer.appendChild(star);
}


