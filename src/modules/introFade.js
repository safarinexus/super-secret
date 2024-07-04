export default function introFade() {
  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.intro');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.7 // Trigger when 70% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('reappearing');
                entry.target.id = '';
            } else {
                console.log('fade-away');
                entry.target.id = 'start';
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
});
}