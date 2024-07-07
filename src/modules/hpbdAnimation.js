import { confetti } from "@tsparticles/confetti";

export default function hpbdAnimation() {
    document.addEventListener('DOMContentLoaded', function() {
        const area = document.querySelector('.content');
    
        const observerOptions = {
            root: null, // Use the viewport
            rootMargin: '0px 0px -75% 0px', // Offset to trigger when the element is in the middle
            threshold: 0 // Trigger when any part of the element is in view
        };
        
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('happy bday!'); 
            
                    entry.target.innerHTML = '<h2 class="text_shadows">Happy Birthday, My Dearest Kyla!</h2>\
                                            <div class="my-msg">To the strongest, sweetest, cutest, prettiest, bestest and most wonderful girl. Thank you for standing by me and for all the beautiful moments before and in front of us. Thank you for everything that you have done and everything that you are.</div>\
                                            <div class="me-container">\
                                            <div class="photous"></div>\
                                            <p class="from-edgar">From Edgar!</p>\
                                            </div>';
                    area.style.animation = '0.5s appear linear';
                    setTimeout(() => {
                        document.querySelector('.my-msg').classList.add('my-msg-appear');
                        document.querySelector('.my-msg').style.animation = '0.5s msg-appear linear';
                    }, 1000);
                    setTimeout(() => {
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
                                spread: 180, 
                                angle: 270,
                                origin: { x: 0.5, y: 0 },
                                shapes: ["heart"],
                                colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"], 
                                scalar: 5,
                                ticks: 125,
                            });
                        }); 

                        observer.unobserve(entry.target);
                    }, 50)
                    }
                });
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(area);
    }); 
}