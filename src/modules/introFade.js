export default function introFade() {
  document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.intro');
    let flag = false; 

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.75 // Trigger whole element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!flag) {
                    flag = true; 
                } else {
                    console.log('reappearing');
                    entry.target.id = 'appear';
                }
            } else {
                console.log('fade-away');
                entry.target.id = 'start';
            }
        });
    }, observerOptions);

    observer.observe(element);
});
}