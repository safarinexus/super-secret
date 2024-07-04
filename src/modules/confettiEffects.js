import { confetti } from "@tsparticles/confetti";

export default function confettiEffects() {
    document.addEventListener('DOMContentLoaded', function() {
        const target = document.querySelector('.content');
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
                }, 1500);
                observer.unobserve(target); // Stop observing if needed
            }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(target);
    });
}
