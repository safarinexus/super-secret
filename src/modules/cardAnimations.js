export default function cardAnimations() {
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.card');
    
        const observerOptions = {
          root: null, // Use the viewport
          rootMargin: '-50% 0px -50% 0px', // Offset to trigger when the element is in the middle
          threshold: 0// Trigger when any part of the element is in view
        };
        
        const observerCallback = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              console.log('card appear!'); 
              entry.target.classList.add('card-appear');
              observer.unobserve(entry.target);
            }
          });
        };
        
        const observer2 = new IntersectionObserver(observerCallback, observerOptions);
        cards.forEach((card) => {
          observer2.observe(card);
        });
    }); 
}