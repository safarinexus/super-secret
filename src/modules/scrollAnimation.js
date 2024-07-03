export default function scrollAnimation() {
    document.addEventListener('DOMContentLoaded', function() {
        const textArea = document.querySelector('#loved-ones');
        const cards = document.querySelectorAll('.card');
    
        const observerOptions = {
          root: null, // Use the viewport
          rootMargin: '-50% 0px -50% 0px', // Offset to trigger when the element is in the middle
          threshold: 0 // Trigger when any part of the element is in view
        };
    
        const observerOptions2 = {
          root: null, // Use the viewport
          rootMargin: '-50% 0px -50% 0px', // Offset to trigger when the element is in the middle
          threshold: 0// Trigger when any part of the element is in view
        };
      
        
        
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                entry.target.innerHTML = '<h1 class="type-text">And from the ones that love you!</h1>';
                observer.unobserve(entry.target);
                }
            });
        };
        
        const observerCallback2 = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              console.log('card appear!'); 
              entry.target.classList.add('card-appear');
              observer.unobserve(entry.target);
            }
          });
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(textArea);
        const observer2 = new IntersectionObserver(observerCallback2, observerOptions2);
        cards.forEach((card) => {
          console.log(card);
          observer2.observe(card);
        });
    }); 
}