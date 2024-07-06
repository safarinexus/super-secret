import kylie1 from '../../assets/kyliePhotos/kyliePhoto1.jpeg';
import kylie2 from '../../assets/kyliePhotos/kyliePhoto2.jpeg';
import kylie3 from '../../assets/kyliePhotos/kyliePhoto3.jpeg';
import kylie4 from '../../assets/kyliePhotos/kyliePhoto4.jpeg';
import kylie5 from '../../assets/kyliePhotos/kyliePhoto5.jpeg';
 


export default function kyliePhotos() {
    const slider = document.querySelector('#gailie-cho-images'); 
    const photo1 = new Image();
    photo1.src = kylie1; 
    photo1.style.height = '240px';
    const photo2 = new Image();
    photo2.src = kylie2; 
    photo2.style.height = '240px';
    const photo3 = new Image();
    photo3.src = kylie3; 
    photo3.style.height = '240px';  
    const photo4 = new Image();
    photo4.src = kylie4; 
    photo4.style.height = '240px'; 
    const photo5 = new Image();
    photo5.src = kylie5; 
    photo5.style.height = '240px'; 
    
    slider.appendChild(photo1); 
    slider.appendChild(photo2);
    slider.appendChild(photo3);
    slider.appendChild(photo4); 
    slider.appendChild(photo5);
}