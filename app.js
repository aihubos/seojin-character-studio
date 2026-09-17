document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // 2. Copy to Clipboard Functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const preElement = btn.nextElementSibling;
            const textToCopy = preElement.innerText;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = btn.innerText;
                btn.innerText = '복사완료!';
                btn.style.backgroundColor = 'var(--accent-blue)';
                btn.style.color = 'white';
                btn.style.borderColor = 'var(--accent-blue)';
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                    btn.style.borderColor = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                btn.innerText = '실패';
            });
        });
    });

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
