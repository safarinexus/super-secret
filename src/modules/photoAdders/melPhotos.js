import mel1 from '../../assets/melPhotos/melPhoto1.jpeg';
import mel2 from '../../assets/melPhotos/melPhoto2.jpeg';
import mel3 from '../../assets/melPhotos/melPhoto3.jpeg';
import mel4 from '../../assets/melPhotos/melPhoto4.jpeg';

export default function melPhotos() {
    const slider = document.querySelector('#mel-images'); 
    const photo1 = new Image();
    photo1.src = mel1; 
    photo1.style.height = '300px'; 
    const photo2 = new Image();
    photo2.src = mel2; 
    photo2.style.height = '300px'; 
    const photo3 = new Image();
    photo3.src = mel3; 
    photo3.style.height = '300px'; 
    const photo4 = new Image();
    photo4.src = mel4; 
    photo4.style.height = '300px'; 

    slider.appendChild(photo1); 
    slider.appendChild(photo2); 
    slider.appendChild(photo3); 
    slider.appendChild(photo4); 
}