console.log('initiated'); 

import './style.scss';
import { confetti } from "@tsparticles/confetti";

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const text = document.querySelector('.text_shadows'); 
const photous = document.querySelector(".photous");



text.addEventListener("click", () => {
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { x: 1, y: 0.9 },
    });

    confetti({
        particleCount: 200,
        spread: 90,
        origin: { x: 0, y: 0.9 },
    });

    confetti({
        particleCount: 200,
        spread: 90,
        angle: 225,
        origin: { x: 1, y: 0 },
    });

    confetti({
        particleCount: 200,
        spread: 90,
        angle: 315,
        origin: { x: 0, y: 0 },
    });
});

photous.addEventListener("click", () => {
    confetti({
        particleCount: 200,
        spread: 90, 
        origin: { x: 0.5, y: 1 },
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"], 
        scalar: 4,
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.content');
    const target2 = document.querySelector('.buffer');
  
    const observerOptions = {
      root: null, // Default is the viewport
      rootMargin: '0px',
      threshold: 0.8 // Trigger 
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Element is in view');
            confetti({
                particleCount: 200,
                spread: 90,
                origin: { x: 1, y: 0.9 },
            });
        
            confetti({
                particleCount: 200,
                spread: 90,
                origin: { x: 0, y: 0.9 },
            });
        
            confetti({
                particleCount: 80,
                spread: 90,
                angle: 225,
                origin: { x: 1, y: 0 },
            });
        
            confetti({
                particleCount: 80,
                spread: 90,
                angle: 315,
                origin: { x: 0, y: 0 },
            });
            
            setTimeout(() => {
                confetti({
                    particleCount: 200,
                    spread: 90, 
                    origin: { x: 0.5, y: 1 },
                    shapes: ["heart"],
                    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"], 
                    scalar: 4,
                });
            }, 2000);
            observer.unobserve(target); // Stop observing if needed
        }
      });
    };
    const observerOptions2 = {
        root: null, // Use the viewport
        rootMargin: '-50% 0px -50% 0px', // Offset to trigger when the element is in the middle
        threshold: 0 // Trigger when any part of the element is in view
      };
    
      const observerCallback2= (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.innerHTML = '<h1 class="type-text" id="loved-ones">And from the ones that love you!</h1>';
            observer.unobserve(target2); 
          }
        });
      };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(target);
    const observer2 = new IntersectionObserver(observerCallback2, observerOptions2);
    observer2.observe(target2);
  });


