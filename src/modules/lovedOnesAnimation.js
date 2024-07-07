export default function lovedOnesAnimation() {
    document.addEventListener('DOMContentLoaded', function() {
        const textArea = document.querySelector('.loved-ones');
    
        const observerOptions = {
            root: null, // Use the viewport
            rootMargin: '-50% 0px -50% 0px', // Offset to trigger when the element is in the middle
            threshold: 0 // Trigger when any part of the element is in view
        };
        
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                entry.target.innerHTML = '<h1 class="type-text">And from more people that love you!</h1>';
                observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(textArea);
    }); 
}
