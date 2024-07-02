import alyssa1 from '../assets/alyssaPhotos/alyssaPhoto1.jpeg';
import alyssa2 from '../assets/alyssaPhotos/alyssaPhoto2.jpeg';
import alyssa3 from '../assets/alyssaPhotos/alyssaPhoto3.jpeg';
import alyssa4 from '../assets/alyssaPhotos/alyssaPhoto4.jpeg';
import alyssa5 from '../assets/alyssaPhotos/alyssaPhoto5.jpeg';

export default function alyssaPhotos() {
    const slider = document.querySelector('#alyssa-images'); 
    const photo1 = new Image();
    photo1.src = alyssa1; 
    photo1.style.height = '300px'; 
    const photo2 = new Image();
    photo2.src = alyssa2; 
    photo2.style.height = '300px'; 
    const photo3 = new Image();
    photo3.src = alyssa3; 
    photo3.style.height = '300px'; 
    const photo4 = new Image();
    photo4.src = alyssa4; 
    photo4.style.height = '300px'; 
    const photo5 = new Image();
    photo5.src = alyssa5; 
    photo5.style.height = '300px';

    slider.appendChild(photo1); 
    slider.appendChild(photo2); 
    slider.appendChild(photo3); 
    slider.appendChild(photo4); 
    slider.appendChild(photo5);
}