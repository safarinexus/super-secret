import vallerie1 from '../assets/valleriePhotos/valleriePhoto1.jpeg';
import vallerie2 from '../assets/valleriePhotos/valleriePhoto2.jpeg';
import vallerie3 from '../assets/valleriePhotos/valleriePhoto3.jpeg';
import vallerie4 from '../assets/valleriePhotos/valleriePhoto4.jpeg';

export default function valleriePhotos() {
    const slider = document.querySelector('#vallerie-images'); 
    const photo1 = new Image();
    photo1.src = vallerie1; 
    photo1.style.height = '300px'; 
    const photo2 = new Image();
    photo2.src = vallerie2; 
    photo2.style.height = '300px'; 
    const photo3 = new Image();
    photo3.src = vallerie3; 
    photo3.style.height = '300px'; 
    const photo4 = new Image();
    photo4.src = vallerie4; 
    photo4.style.height = '300px'; 

    slider.appendChild(photo1); 
    slider.appendChild(photo2); 
    slider.appendChild(photo3); 
    slider.appendChild(photo4); 
}