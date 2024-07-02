import shanna1 from '../assets/shannaPhotos/shannaPhoto1.jpeg';
import shanna2 from '../assets/shannaPhotos/shannaPhoto2.jpeg';
import shanna3 from '../assets/shannaPhotos/shannaPhoto3.jpeg';

export default function shannaPhotos() {
    const slider = document.querySelector('#shanna-images'); 
    const photo1 = new Image();
    photo1.src = shanna1; 
    photo1.style.height = '310px'; 
    const photo2 = new Image();
    photo2.src = shanna2; 
    photo2.style.height = '310px'; 
    const photo3 = new Image();
    photo3.src = shanna3; 
    photo3.style.height = '310px'; 



    slider.appendChild(photo1);
    slider.appendChild(photo2);
    slider.appendChild(photo3);
}