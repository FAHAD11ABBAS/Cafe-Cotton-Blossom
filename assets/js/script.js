document.addEventListener('DOMContentLoaded', () => {
    console.log('Café Cotton Blossom Premium Experience Loaded!');

    // --- 1. Advanced Staggered Scroll Reveal ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // If the element is a grid container, animate its children nicely
                if (entry.target.classList.contains('features-grid') || entry.target.classList.contains('menu-category')) {
                    const children = entry.target.querySelectorAll('.feature-card');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, index * 200); // 200ms delay between each item
                    });
                }
            }
        });
    }, observerOptions);

    // Target elements to animate
    document.querySelectorAll('.feature-card, .section h2, .hero-content').forEach(el => {
        el.classList.add('fade-in-up'); // Add base class
        observer.observe(el);
    });

    // Also observe grids for the staggered effect logic
    document.querySelectorAll('.features-grid').forEach(el => {
        observer.observe(el);
    });


    // --- 2. Floating Petals Generator ---
    const createPetals = () => {
        const container = document.createElement('div');
        container.classList.add('petals-container');
        document.body.appendChild(container);

        const petalCount = 15; // Number of petals

        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');

            // Randomize properties
            const size = Math.random() * 15 + 10; // 10px to 25px
            const left = Math.random() * 100; // 0% to 100%
            const duration = Math.random() * 10 + 10; // 10s to 20s
            const delay = Math.random() * 15; // 0s to 15s

            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            petal.style.left = `${left}%`;
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `${delay}s`;

            container.appendChild(petal);
        }
    };

    createPetals();


    // --- 3. Contact Form Handling ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Add a nice success animation/message
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Message Sent! ✨';
            btn.style.backgroundColor = '#4CAF50';

            setTimeout(() => {
                alert('Thank you! We have received your message and will reply shortly.');
                contactForm.reset();
                btn.innerText = originalText;
                btn.style.backgroundColor = ''; // Reset
            }, 500);
        });
    }

    // --- 4. Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
