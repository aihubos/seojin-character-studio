document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            lightboxImg.src = e.target.src;
            lightboxImg.alt = e.target.alt;
            lightbox.showModal();
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    const closeLightbox = () => {
        lightbox.close();
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === document.querySelector('.lightbox-content')) {
            closeLightbox();
        }
    });

    // 3. Copy to Clipboard for Pre blocks
    const preBlocks = document.querySelectorAll('pre');
    
    preBlocks.forEach(pre => {
        pre.addEventListener('click', async () => {
            const code = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
            try {
                await navigator.clipboard.writeText(code);
                
                // Visual feedback
                const originalText = pre.style.getPropertyValue('--pseudo-content');
                pre.style.setProperty('--pseudo-content', '"복사 완료!"');
                
                // This is a bit hacky with pseudo-elements, so let's do a class toggle
                pre.classList.add('copied');
                const oldContent = pre.getAttribute('data-after') || '복사하기';
                
                // Add temporary styling via a small popup or alert
                const tooltip = document.createElement('div');
                tooltip.textContent = '복사되었습니다!';
                tooltip.style.position = 'fixed';
                tooltip.style.bottom = '20px';
                tooltip.style.right = '20px';
                tooltip.style.background = '#10b981';
                tooltip.style.color = 'white';
                tooltip.style.padding = '10px 20px';
                tooltip.style.borderRadius = '4px';
                tooltip.style.zIndex = '1000';
                tooltip.style.transition = 'opacity 0.3s';
                
                document.body.appendChild(tooltip);
                
                setTimeout(() => {
                    tooltip.style.opacity = '0';
                    setTimeout(() => tooltip.remove(), 300);
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });
});
