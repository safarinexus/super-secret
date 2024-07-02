console.log('initiated'); 

import './style.scss';
import { confetti } from "@tsparticles/confetti";
import 'animate.css';

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const text = document.querySelector('.text_shadows'); 
const photous = document.querySelector(".photous");
const imageSlider = document.querySelector('.image-slider');


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
    const cards = document.querySelectorAll('.card');
  
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
    
    const observerCallback2 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.innerHTML = '<h1 class="type-text" id="loved-ones">And from the ones that love you!</h1>';
            observer.unobserve(entry.target); 
            }
        });
    };
    
    const observerCallback3 = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('card appear!'); 
          entry.target.classList.add('card-appear');
          observer.unobserve(entry.target); 
        }
      });
    };
    
    

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(target);
    const observer2 = new IntersectionObserver(observerCallback2, observerOptions2);
    observer2.observe(target2);
    const observer3 = new IntersectionObserver(observerCallback3, observerOptions2);
    cards.forEach((card) => {
      console.log(card);
      observer3.observe(card);
    });
  });

import addNote from './addNote';

//mel
addNote('mel', 'happy bday baby 😗😗 you’re living and thriving and I love that so much. keep slaying and being gorjus as always. So now that you’re 21 I can bring you to the strip clubs right 😁😁😁😁 We need to take more pics together fr… All Edgar’s fault 🙄🙄 ');
import melPhotos from './photoAdders/melPhotos'; 
melPhotos();

//alyssa 
//addNote('alyssa', 'hey bbg, happiest birthday !! thanks for always being so down to do anything !! ure literally my twin, from dressing the same (matching unintentially all the time) to now even saying the same things, it’s actually quite creepy 💀 thank you for being the bubbliest girlie all the time and ofc the girlie that literally pulled syaxan babis tgt 🫶🏻 i hope u have the happiest and best 21 😚 thank u for being my friends and let’s make more memories tgt !! LOVE YOU SO MUCH MUACKS and continue brewing that tea 🍵 i’ll be the teacup to ur teapot 😉');
