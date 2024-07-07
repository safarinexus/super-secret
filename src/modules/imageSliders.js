export default function imageSliders() {
    document.addEventListener('DOMContentLoaded', () => {
        const allsliders = document.querySelectorAll('.slider');
    
        function addAnimation() {
            allsliders.forEach(slider => {
                const inner = slider.querySelector('.slider-track');
                const slides = Array.from(inner.children);
    
                for (let i = 0; i < 2; i++) {
                    slides.forEach((item) => {
                        const duplicate = item.cloneNode(true);
                        duplicate.setAttribute('aria-hidden', true);
                        inner.appendChild(duplicate);
                    })
                }
            })
        }
    
        addAnimation();
    });
}