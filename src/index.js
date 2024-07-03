console.log('initiated'); 

import './style.scss';
import { confetti } from "@tsparticles/confetti";

//reset scroll on reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

//confetti effects
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

//scroll based animations
document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.content');
    const target2 = document.querySelector('.buffer');
    const cards = document.querySelectorAll('.card');
    const firstpage = document.querySelector('.preview');
  
    const observerOptions = {
      root: null, // Default is the viewport
      rootMargin: '0px',
      threshold: 0.8 // Trigger 
    };

    const observerOptions2 = {
      root: null, // Use the viewport
      rootMargin: '-50% 0px -50% 0px', // Offset to trigger when the element is in the middle
      threshold: 0 // Trigger when any part of the element is in view
    };

    const observerOptions3 = {
      root: null, // Use the viewport
      rootMargin: '-50% 0px -50% 0px', // Offset to trigger when the element is in the middle
      threshold: 0// Trigger when any part of the element is in view
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
    
    const observerCallback2 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.innerHTML = '<h1 class="type-text" id="loved-ones">And from the ones that love you!</h1>';
            entry.target.classList.add('card-appear');
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
    
    /*
    const observerCallback4 = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('card appear!'); 
          entry.target.classList.add('card-appear');
          observer.unobserve(entry.target); 
        }
      });
    };
    */
    

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(target);
    const observer2 = new IntersectionObserver(observerCallback2, observerOptions2);
    observer2.observe(target2);
    const observer3 = new IntersectionObserver(observerCallback3, observerOptions3);
    cards.forEach((card) => {
      console.log(card);
      observer3.observe(card);
    });
});


//adding the notes
import addNote from './addNote';

//mel
addNote('mel', 'happy bday baby 😗😗 you’re living and thriving and I love that so much. keep slaying and being gorjus as always. So now that you’re 21 I can bring you to the strip clubs right 😁😁😁😁 We need to take more pics together fr… All Edgar’s fault 🙄🙄 ', true);
import melPhotos from './photoAdders/melPhotos'; 
melPhotos();

//alyssa 
addNote('alyssa', 'hey bbg, happiest birthday !! thanks for always being so down to do anything !! ure literally my twin, from dressing the same (matching unintentially all the time) to now even saying the same things, it’s actually quite creepy 💀 thank you for being the bubbliest girlie all the time and ofc the girlie that literally pulled syaxan babis tgt 🫶🏻 i hope u have the happiest and best 21 😚 thank u for being my friends and let’s make more memories tgt !! LOVE YOU SO MUCH MUACKS and continue brewing that tea 🍵 i’ll be the teacup to ur teapot 😉', true);
import alyssaPhotos from './photoAdders/alyssaPhotos'; 
alyssaPhotos();

//zhi qian
addNote('zhi qian', "Happy Birthday Kyla!!🎂 It's officially 21 now BIG GURL!! Im so glad to know you from emix and I rly miss those times when we all just come tgt and yap all day HAHAHAHA jst wanna say thank you for being there when i feel down and helping me when im feel lost. I rly appreciate everything you did for mee 🩷LOVE U MUA 💋I oso wanna tell you tht i rly respect you alot, putting your heart and soul, sacrificing your sleep just for emix. You are doing really great okay, dont let anyone or anything affect you and you def deserve all the rewards and happiness that comes your way❣️ Always rmb that im here for you if u need anything okay!! && Hope you have a blast on your birthday and may all your wishes come truee!! Also Last long with edgar~ yall v cute!! hehe 😉");

//vallerie
addNote('vallerie', "HELLO KYLABONGBONG HAPPY 21st BIRTHDAY YAYYYY ❤️❤️❤️ thank you for being such a great friend and i’m so proud to see you grow in emix especially as a vp hehe PLS TAKE CARE OF YOURSELF AND STOP FALLING SICK 🤬🤬🤬 hope you know that syaxan will always here for you,, don’t be too hard on yourself okieee can’t wait to see you grow even more as a dancer huehue hopefully you’ll be my choreog next time 😆😆😆 enjoy your 21st bday and i can’t wait for our next tea sesh tgt <3 love you!!!", true);
import valleriePhotos from './photoAdders/valleriePhotos'; 
valleriePhotos();

//si qi
addNote('siqi', "HAPPY 21ST MY DEAR!!!!! honestly the “meeting twice” theory is saur true bc i knew u in sn but we only got closer aft jc ori heheehhahahah so grateful u entered my life la u adorable ball of sunshine <3 although we dont meet super often, i know i can count on u hehehe n it’s alw a good time w u la mi amor~ u were an integral part of my teens n now an integral part of my adulthood n i love u!!!!!! so much!!!!!!!!!!", true); 
import siqiPhotos from './photoAdders/siqiPhotos'; 
siqiPhotos();

//vania
addNote('vania', 'happy birthday ms kyla vp!!!!! so thankful for you and to be working with you through timeless and exco :"") continue to shake ass and stay a slaying queen in EMIX hehe sORRY IDH any meaningful photos w u kyla :-((( ur face when ryan was talking was priceless HAHHAHA', true); 
import vaniaPhotos from './photoAdders/vaniaPhotos'; 
vaniaPhotos();

//shanna
addNote('shanna', 'dear kyla, happiest 21st bd <3 so happy to have met u thru emix and omg blaw class wow tb and we became so much more closer thru sxayan!! v grateful for all the amazing memories we shared tgt, esp all the fun an laughter we had throughout the past 2 years (omg so long alr….) know that you’re doing such a great job as an exco and i’m always v proud of u!!! tho i don’t always come for emix HAHAHAHA OOOPS my heart is still w emix & and i’ll be supporting u from outside still keke HOPE OUR FS W SYAXAN REMAINS SO SLAYYYYY AND JIAYOUS IN everything that you do okie, U GOT THIS! also u and edgar must go a long way ok, i wan to witness the real thing without edgar saying “she’s too small for me” HAHAHAHAHAH love you lots girl!!! muacks 💗💗💗', true); 
import shannaPhotos from './photoAdders/shannaPhotos'; 
shannaPhotos();

//cong 
import congNote from './congNote';
congNote();
import congPhotos from './photoAdders/congPhotos'; 
congPhotos();

//bernice
addNote('bernice', 'happy 21st bitch. its been SO MANY YEARS together and im so absolutely proud of what youve achieved and the shit you had to overcome regardless of the situation. you are one tough little shit and honestly thank you for always being you. youre still the smartest, most bubbly and random girl, almost exactly the same as when we met (kidding i dont rmb alot from our childhood 😭) but yes. growing up with you has been such an interesting journey but i wouldnt wna have it any other way. wishing you happiness always my girl, theres so much more things to explore and experience and i hope you manage to enjoy them all ❤️ happy 21st girlie i love you so so so much 🎀😚', true); 
import bernicePhotos from './photoAdders/bernicePhotos'; 
bernicePhotos();

//kim 
addNote('kim', "happy 21st bday love!! i'm so thankful to have met you in uni and get to know you better as time passed! your presence is always so pleasant to have and thank you for always including me in plans that don't always involve my batch / friend group!! very very thankful for you <33 and you are so capable and i'm very proud of what you have achieved so far!! you are such a strong and stable gurlie and just keep doing what you have been doing ok!! i will always be here to support you / talk to you / just sit there in your presence! love u bbg", true); 
import kimPhotos from './photoAdders/kimPhotos'; 
kimPhotos();
