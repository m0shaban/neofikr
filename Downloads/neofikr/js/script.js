// Main script.js file for NeoFikr website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all effects
    initMatrixRain();
    initParticlesJS();
    setupScrollAnimations();
    setupRandomTipButton();
    setupMobileMenu();
    setupCurrentYear();
    
    // Add holographic card effects
    document.querySelectorAll('.holographic-card').forEach(setupHolographicEffect);
});

// Matrix Rain Effect
function initMatrixRain() {
    if (!document.body.dataset.effectsMatrix) return;
    
    const matrixRain = document.getElementById('matrixRain');
    if (!matrixRain) return;
    
    const characters = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي٠١٢٣٤٥٦٧٨٩';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const span = document.createElement('span');
        span.innerHTML = getRandomCharacters(10, characters);
        span.style.left = `${i * 20}px`;
        span.style.animationDuration = `${Math.random() * 10 + 5}s`;
        span.style.animationDelay = `${Math.random() * 10}s`;
        matrixRain.appendChild(span);
    }
    
    function getRandomCharacters(length, charset) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result;
    }
}

// Initialize particles.js
function initParticlesJS() {
    if (!document.body.dataset.effectsParticles) return;
    
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', particlesConfig);
    } else {
        console.warn('particles.js not loaded');
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Setup random tip button
function setupRandomTipButton() {
    const button = document.getElementById('random-tip-button');
    if (!button) return;
    
    const tips = [
        "استخدم الذكاء الاصطناعي لتحليل بيانات العملاء واستخراج رؤى قيمة",
        "تعلم آلية عمل البلوكشين وتأثيرها على مستقبل الأعمال الرقمية",
        "حماية البيانات والخصوصية من أهم عناصر نجاح المشاريع الرقمية",
        "يمكن للشات بوت الذكي تقليل تكاليف خدمة العملاء بنسبة تصل إلى 30%",
        "التعلم الآلي يمكن أن يحسن من دقة التنبؤات بنسبة تصل إلى 80%",
        "الويب 3.0 سيغير طريقة تفاعلنا مع الإنترنت بشكل جذري"
    ];
    
    button.addEventListener('click', function() {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        
        // Create tooltip element
        let tooltip = document.getElementById('cyber-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'cyber-tooltip';
            tooltip.className = 'fixed z-50 bg-gray-900/90 backdrop-blur-md p-4 rounded-lg border border-cyan-500/30 text-light max-w-md';
            document.body.appendChild(tooltip);
        }
        
        // Set content and position
        tooltip.innerHTML = `
            <div class="flex items-start">
                <div class="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center mr-3 border border-cyan-500/30 pulse-soft">
                    <i class="fas fa-lightbulb text-cyan-400"></i>
                </div>
                <div>
                    <h4 class="text-cyan-400 font-bold mb-1">نصيحة تقنية</h4>
                    <p>${randomTip}</p>
                </div>
            </div>
            <button class="absolute top-2 right-2 text-gray-400 hover:text-white" onclick="document.getElementById('cyber-tooltip').style.display='none'">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Position the tooltip
        const buttonRect = button.getBoundingClientRect();
        tooltip.style.top = `${buttonRect.bottom + 10}px`;
        tooltip.style.left = `${buttonRect.left - 100}px`;
        tooltip.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (tooltip) {
                tooltip.style.display = 'none';
            }
        }, 5000);
    });
}

// Setup mobile menu
function setupMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mainMenu = document.querySelector('[aria-label="Main menu"]');
    
    if (!menuButton || !mainMenu) return;
    
    menuButton.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        
        if (!expanded) {
            mainMenu.classList.remove('hidden');
            mainMenu.classList.add('fixed', 'top-20', 'left-0', 'w-full', 'bg-gray-900/95', 'backdrop-blur-md', 'p-6', 'flex', 'flex-col', 'space-y-4', 'border-t', 'border-cyan-500/20', 'z-50');
            menuButton.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mainMenu.classList.add('hidden');
            mainMenu.classList.remove('fixed', 'top-20', 'left-0', 'w-full', 'bg-gray-900/95', 'backdrop-blur-md', 'p-6', 'flex', 'flex-col', 'space-y-4', 'border-t', 'border-cyan-500/20', 'z-50');
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Setup current year in footer
function setupCurrentYear() {
    const yearElement = document.getElementById('config-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Setup holographic effect
function setupHolographicEffect(card) {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / centerY * 10;
        const angleY = (x - centerX) / centerX * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg) scale3d(1.03, 1.03, 1.03)`;
        
        const percentX = x / rect.width;
        const percentY = y / rect.height;
        
        const shine = card.querySelector('.holographic-shine');
        if (!shine) {
            const shineEl = document.createElement('div');
            shineEl.className = 'holographic-shine';
            shineEl.style = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(
                    circle at ${percentX * 100}% ${percentY * 100}%,
                    rgba(255, 255, 255, 0.3) 0%,
                    rgba(255, 255, 255, 0) 50%
                );
                z-index: 0;
                pointer-events: none;
            `;
            card.appendChild(shineEl);
        } else {
            shine.style.background = `radial-gradient(
                circle at ${percentX * 100}% ${percentY * 100}%,
                rgba(255, 255, 255, 0.3) 0%,
                rgba(255, 255, 255, 0) 50%
            )`;
        }
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        const shine = card.querySelector('.holographic-shine');
        if (shine) {
            shine.remove();
        }
    });
}
