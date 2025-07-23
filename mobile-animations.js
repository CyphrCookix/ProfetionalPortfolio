// Mobile-Optimized Animations and Micro-interactions
console.log('Mobile animations loading...');

class MobileAnimationManager {
    constructor() {
        this.isTouch = 'ontouchstart' in window;
        this.isMobile = window.innerWidth < 768;
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.scrollObserver = null;
        this.touchElements = new Map();
        
        this.init();
    }

    init() {
        if (this.reducedMotion) {
            console.log('Reduced motion detected, disabling animations');
            return;
        }

        this.setupScrollAnimations();
        this.setupTouchFeedback();
        this.setupHoverEffects();
        this.setupStaggeredAnimations();
        this.setupInteractiveGlows();
        
        console.log('Mobile animations initialized');
    }

    // Scroll-triggered animations optimized for mobile
    setupScrollAnimations() {
        this.scrollObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        
                        // Add staggered animation to child elements
                        const children = entry.target.querySelectorAll('.stagger-child');
                        children.forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('animate-slide-up');
                            }, index * 100);
                        });
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px'
            }
        );

        // Observe elements for scroll animations
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            this.scrollObserver.observe(el);
        });

        // Add scroll animation classes to cards
        document.querySelectorAll('.card-enhanced, .card-hover').forEach(card => {
            card.classList.add('animate-on-scroll');
            this.scrollObserver.observe(card);
        });
    }

    // Enhanced touch feedback for mobile devices
    setupTouchFeedback() {
        if (!this.isTouch) return;

        const touchElements = document.querySelectorAll('.btn-enhanced, .card-enhanced, .interactive-glow');
        
        touchElements.forEach(element => {
            this.addTouchFeedback(element);
        });
    }

    addTouchFeedback(element) {
        let touchStartTime = 0;
        let touchTimer = null;

        element.addEventListener('touchstart', (e) => {
            touchStartTime = Date.now();
            
            // Add immediate visual feedback
            element.classList.add('touch-active');
            
            // Add ripple effect
            this.createRippleEffect(element, e.touches[0]);
            
            // Long press detection
            touchTimer = setTimeout(() => {
                this.handleLongPress(element);
            }, 500);
            
        }, { passive: true });

        element.addEventListener('touchend', () => {
            const touchDuration = Date.now() - touchStartTime;
            
            clearTimeout(touchTimer);
            element.classList.remove('touch-active');
            
            // Add bounce effect for quick taps
            if (touchDuration < 200) {
                element.classList.add('quick-tap');
                setTimeout(() => {
                    element.classList.remove('quick-tap');
                }, 200);
            }
        }, { passive: true });

        element.addEventListener('touchcancel', () => {
            clearTimeout(touchTimer);
            element.classList.remove('touch-active');
        }, { passive: true });
    }

    createRippleEffect(element, touch) {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('div');
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (touch.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (touch.clientY - rect.top - size / 2) + 'px';
        ripple.classList.add('ripple-effect');
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    handleLongPress(element) {
        // Add haptic feedback if available
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        element.classList.add('long-press-active');
        setTimeout(() => {
            element.classList.remove('long-press-active');
        }, 300);
    }

    // Enhanced hover effects for desktop
    setupHoverEffects() {
        if (this.isTouch) return;

        const hoverElements = document.querySelectorAll('.card-enhanced, .social-link');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.addHoverGlow(element);
            });
            
            element.addEventListener('mouseleave', () => {
                this.removeHoverGlow(element);
            });
        });
    }

    addHoverGlow(element) {
        element.classList.add('hover-glow-active');
    }

    removeHoverGlow(element) {
        element.classList.remove('hover-glow-active');
    }

    // Staggered animations for grouped elements
    setupStaggeredAnimations() {
        const staggerGroups = document.querySelectorAll('.stagger-group');
        
        staggerGroups.forEach(group => {
            const children = group.children;
            Array.from(children).forEach((child, index) => {
                child.style.animationDelay = `${index * 0.1}s`;
                child.classList.add('stagger-child');
            });
        });
    }

    // Interactive glow effects
    setupInteractiveGlows() {
        const glowElements = document.querySelectorAll('.interactive-glow');
        
        glowElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add('glow-active');
            });
            
            element.addEventListener('mouseleave', () => {
                element.classList.remove('glow-active');
            });
            
            // Touch version for mobile
            if (this.isTouch) {
                element.addEventListener('touchstart', () => {
                    element.classList.add('glow-active');
                }, { passive: true });
                
                element.addEventListener('touchend', () => {
                    setTimeout(() => {
                        element.classList.remove('glow-active');
                    }, 300);
                }, { passive: true });
            }
        });
    }

    // Performance monitoring for animations
    monitorPerformance() {
        let frameCount = 0;
        let startTime = performance.now();
        
        const measureFrame = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime - startTime >= 1000) {
                const fps = Math.round(frameCount * 1000 / (currentTime - startTime));
                
                if (fps < 30 && this.isMobile) {
                    console.warn('Low FPS detected, reducing animations');
                    this.enablePerformanceMode();
                }
                
                frameCount = 0;
                startTime = currentTime;
            }
            
            requestAnimationFrame(measureFrame);
        };
        
        requestAnimationFrame(measureFrame);
    }

    enablePerformanceMode() {
        document.body.classList.add('performance-mode');
        
        // Disable heavy animations
        document.querySelectorAll('.float-animation').forEach(el => {
            el.style.animation = 'none';
        });
        
        // Reduce animation duration
        document.documentElement.style.setProperty('--animation-duration', '0.2s');
    }

    // Cleanup method
    destroy() {
        if (this.scrollObserver) {
            this.scrollObserver.disconnect();
        }
        
        this.touchElements.clear();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.mobileAnimations = new MobileAnimationManager();
});

// Handle orientation changes
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        if (window.mobileAnimations) {
            window.mobileAnimations.isMobile = window.innerWidth < 768;
        }
    }, 100);
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileAnimationManager;
}