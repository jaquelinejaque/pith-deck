class PitchDeckManager {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 4;
        this.init();
    }

    init() {
        this.createSlideIndicators();
        this.createProgressBar();
        this.bindEvents();
        this.showSlide(1);
        this.updateProgress();
    }

    createSlideIndicators() {
        const indicatorContainer = document.querySelector('.slide-indicator');
        if (!indicatorContainer) return;

        for (let i = 1; i <= this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.onclick = () => this.showSlide(i);
            indicatorContainer.appendChild(dot);
        }
    }

    createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        document.body.appendChild(progressBar);
    }

    bindEvents() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ': // Spacebar
                    this.nextSlide();
                    break;
                case 'Home':
                    this.showSlide(1);
                    break;
                case 'End':
                    this.showSlide(this.totalSlides);
                    break;
            }
        });

        // Touch/swipe support for mobile
        let startX = 0;
        let startY = 0;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;

            // Only respond to horizontal swipes
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (Math.abs(diffX) > 50) { // Minimum swipe distance
                    if (diffX > 0) {
                        this.nextSlide();
                    } else {
                        this.previousSlide();
                    }
                }
            }

            startX = 0;
            startY = 0;
        });

        // Auto-play functionality (optional)
        this.startAutoPlay();
    }

    showSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;

        // Update slide visibility
        document.querySelectorAll('.slide').forEach((slide, index) => {
            slide.classList.remove('active');
            if (index + 1 === slideNumber) {
                slide.classList.add('active');
            }
        });

        // Update navigation buttons
        document.querySelectorAll('.navigation button').forEach((button, index) => {
            button.classList.remove('active');
            if (index + 1 === slideNumber) {
                button.classList.add('active');
            }
        });

        // Update slide indicators
        document.querySelectorAll('.slide-indicator .dot').forEach((dot, index) => {
            dot.classList.remove('active');
            if (index + 1 === slideNumber) {
                dot.classList.add('active');
            }
        });

        this.currentSlide = slideNumber;
        this.updateProgress();
        this.restartAutoPlay();
    }

    nextSlide() {
        const next = this.currentSlide >= this.totalSlides ? 1 : this.currentSlide + 1;
        this.showSlide(next);
    }

    previousSlide() {
        const prev = this.currentSlide <= 1 ? this.totalSlides : this.currentSlide - 1;
        this.showSlide(prev);
    }

    updateProgress() {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            const progress = (this.currentSlide / this.totalSlides) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 8000); // Change slide every 8 seconds
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    restartAutoPlay() {
        this.startAutoPlay();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.pitchDeck = new PitchDeckManager();
});

// Legacy function for backward compatibility
function showSlide(slideNumber) {
    if (window.pitchDeck) {
        window.pitchDeck.showSlide(slideNumber);
    }
}