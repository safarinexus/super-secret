import vania1 from '../assets/vaniaPhotos/vaniaPhoto1.jpg';

export default function vaniaPhotos() {
    const slider = document.querySelector('#vania-images'); 
    const photo1 = new Image();
    photo1.src = vania1; 
    photo1.style.height = '320px'; 


    slider.appendChild(photo1);
}