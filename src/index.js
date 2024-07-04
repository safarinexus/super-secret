console.log('initiated'); 

import './style.css';

//reset scroll on reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

//adding the notes
import addNote from './modules/addNote';

//mel
addNote('mel', 'happy bday baby 😗😗 you’re living and thriving and I love that so much. keep slaying and being gorjus as always. So now that you’re 21 I can bring you to the strip clubs right 😁😁😁😁 We need to take more pics together fr… All Edgar’s fault 🙄🙄 ', true);
import melPhotos from './modules/photoAdders/melPhotos'; 
melPhotos();

//alyssa 
addNote('alyssa', 'hey bbg, happiest birthday !! thanks for always being so down to do anything !! ure literally my twin, from dressing the same (matching unintentially all the time) to now even saying the same things, it’s actually quite creepy 💀 thank you for being the bubbliest girlie all the time and ofc the girlie that literally pulled syaxan babis tgt 🫶🏻 i hope u have the happiest and best 21 😚 thank u for being my friends and let’s make more memories tgt !! LOVE YOU SO MUCH MUACKS and continue brewing that tea 🍵 i’ll be the teacup to ur teapot 😉', true);
import alyssaPhotos from './modules/photoAdders/alyssaPhotos'; 
alyssaPhotos();

//zhi qian
addNote('zhi qian', "Happy Birthday Kyla!!🎂 It's officially 21 now BIG GURL!! Im so glad to know you from emix and I rly miss those times when we all just come tgt and yap all day HAHAHAHA jst wanna say thank you for being there when i feel down and helping me when im feel lost. I rly appreciate everything you did for mee 🩷LOVE U MUA 💋I oso wanna tell you tht i rly respect you alot, putting your heart and soul, sacrificing your sleep just for emix. You are doing really great okay, dont let anyone or anything affect you and you def deserve all the rewards and happiness that comes your way❣️ Always rmb that im here for you if u need anything okay!! && Hope you have a blast on your birthday and may all your wishes come truee!! Also Last long with edgar~ yall v cute!! hehe 😉");

//vallerie
addNote('vallerie', "HELLO KYLABONGBONG HAPPY 21st BIRTHDAY YAYYYY ❤️❤️❤️ thank you for being such a great friend and i’m so proud to see you grow in emix especially as a vp hehe PLS TAKE CARE OF YOURSELF AND STOP FALLING SICK 🤬🤬🤬 hope you know that syaxan will always here for you,, don’t be too hard on yourself okieee can’t wait to see you grow even more as a dancer huehue hopefully you’ll be my choreog next time 😆😆😆 enjoy your 21st bday and i can’t wait for our next tea sesh tgt <3 love you!!!", true);
import valleriePhotos from './modules/photoAdders/valleriePhotos'; 
valleriePhotos();

//si qi
addNote('siqi', "HAPPY 21ST MY DEAR!!!!! honestly the “meeting twice” theory is saur true bc i knew u in sn but we only got closer aft jc ori heheehhahahah so grateful u entered my life la u adorable ball of sunshine <3 although we dont meet super often, i know i can count on u hehehe n it’s alw a good time w u la mi amor~ u were an integral part of my teens n now an integral part of my adulthood n i love u!!!!!! so much!!!!!!!!!!", true); 
import siqiPhotos from './modules/photoAdders/siqiPhotos'; 
siqiPhotos();

//vania
addNote('vania', 'happy birthday ms kyla vp!!!!! so thankful for you and to be working with you through timeless and exco :"") continue to shake ass and stay a slaying queen in EMIX hehe sORRY IDH any meaningful photos w u kyla :-((( ur face when ryan was talking was priceless HAHHAHA', true); 
import vaniaPhotos from './modules/photoAdders/vaniaPhotos'; 
vaniaPhotos();

//shanna
addNote('shanna', 'dear kyla, happiest 21st bd <3 so happy to have met u thru emix and omg blaw class wow tb and we became so much more closer thru sxayan!! v grateful for all the amazing memories we shared tgt, esp all the fun an laughter we had throughout the past 2 years (omg so long alr….) know that you’re doing such a great job as an exco and i’m always v proud of u!!! tho i don’t always come for emix HAHAHAHA OOOPS my heart is still w emix & and i’ll be supporting u from outside still keke HOPE OUR FS W SYAXAN REMAINS SO SLAYYYYY AND JIAYOUS IN everything that you do okie, U GOT THIS! also u and edgar must go a long way ok, i wan to witness the real thing without edgar saying “she’s too small for me” HAHAHAHAHAH love you lots girl!!! muacks 💗💗💗', true); 
import shannaPhotos from './modules/photoAdders/shannaPhotos'; 
shannaPhotos();

//cong 
import congNote from './modules/congNote';
congNote();
import congPhotos from './modules/photoAdders/congPhotos'; 
congPhotos();

//bernice
addNote('bernice', 'happy 21st bitch. its been SO MANY YEARS together and im so absolutely proud of what youve achieved and the shit you had to overcome regardless of the situation. you are one tough little shit and honestly thank you for always being you. youre still the smartest, most bubbly and random girl, almost exactly the same as when we met (kidding i dont rmb alot from our childhood 😭) but yes. growing up with you has been such an interesting journey but i wouldnt wna have it any other way. wishing you happiness always my girl, theres so much more things to explore and experience and i hope you manage to enjoy them all ❤️ happy 21st girlie i love you so so so much 🎀😚', true); 
import bernicePhotos from './modules/photoAdders/bernicePhotos'; 
bernicePhotos();

//kim 
addNote('kim', "happy 21st bday love!! i'm so thankful to have met you in uni and get to know you better as time passed! your presence is always so pleasant to have and thank you for always including me in plans that don't always involve my batch / friend group!! very very thankful for you <33 and you are so capable and i'm very proud of what you have achieved so far!! you are such a strong and stable gurlie and just keep doing what you have been doing ok!! i will always be here to support you / talk to you / just sit there in your presence! love u bbg", true); 
import kimPhotos from './modules/photoAdders/kimPhotos'; 
kimPhotos();

//scroll fade animation 
import introFade from './modules/introFade';
introFade(); 

//hpbd animation
import hpbdAnimation from './modules/hpbdAnimation';
hpbdAnimation(); 

//confetti effects
import confettiEffects from './modules/confettiEffects';
confettiEffects(); 

//loved-ones text animations
import lovedOnesAnimation from './modules/lovedOnesAnimation'; 
lovedOnesAnimation();

//card animations
import cardAnimations from './modules/cardAnimations'; 
cardAnimations();

