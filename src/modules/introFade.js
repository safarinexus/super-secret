export default function introFade() {
    
    document.addEventListener('DOMContentLoaded', () => {
        const intro = document.querySelector('.intro');
      
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.boundingClientRect.top < 0 || entry.boundingClientRect.bottom > window.innerHeight) {
                // Calculate the distance scrolled out of view
                const distanceOutOfView = Math.max(0, Math.abs(entry.boundingClientRect.top)) + Math.max(0, entry.boundingClientRect.bottom - window.innerHeight);
                // Set the maximum distance for full opacity change
                const maxDistance = window.innerHeight / 2;
                // Calculate the new opacity
                const newOpacity = Math.max(0, 1 - (distanceOutOfView / maxDistance));
                intro.style.opacity = newOpacity;
              } else {
                intro.style.opacity = 1;
              }
            });
          }, {
            threshold: [0, 1] // Trigger callback when the element leaves or enters the viewport
          });
        
          observer.observe(intro);
        });
}