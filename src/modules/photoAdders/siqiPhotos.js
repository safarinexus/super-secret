import siqi1 from '../../assets/siqiPhotos/siqiPhoto1.mp4';
import siqi2 from '../../assets/siqiPhotos/siqiPhoto2.jpeg';
import siqi3 from '../../assets/siqiPhotos/siqiPhoto3.mp4';
import siqi4 from '../../assets/siqiPhotos/siqiPhoto4.jpeg';
import siqi5 from '../../assets/siqiPhotos/siqiPhoto5.jpeg';
import siqi6 from '../../assets/siqiPhotos/siqiPhoto6.jpeg';
import siqi7 from '../../assets/siqiPhotos/siqiPhoto7.jpeg';
import siqi8 from '../../assets/siqiPhotos/siqiPhoto8.jpeg';
import siqi9 from '../../assets/siqiPhotos/siqiPhoto9.jpeg';
 


export default function siqiPhotos() {
    const slider = document.querySelector('#siqi-images'); 
    const video1 = document.createElement('video');
    video1.height = 240;
    video1.src = siqi1;
    video1.controls = true;
    const photo2 = new Image();
    photo2.src = siqi2; 
    photo2.style.height = '240px'; 
    const video2 = document.createElement('video');
    video2.height = 240;
    video2.src = siqi3;
    video2.controls = true;
    const photo4 = new Image();
    photo4.src = siqi4; 
    photo4.style.height = '240px'; 
    const photo5 = new Image();
    photo5.src = siqi5; 
    photo5.style.height = '240px'; 
    const photo6 = new Image();
    photo6.src = siqi6; 
    photo6.style.height = '240px';
    const photo7 = new Image();
    photo7.src = siqi7; 
    photo7.style.height = '240px'; 
    const photo8 = new Image();
    photo8.src = siqi8; 
    photo8.style.height = '240px'; 
    const photo9 = new Image();
    photo9.src = siqi9; 
    photo9.style.height = '240px'; 
    
    
    slider.appendChild(photo2); 
    slider.appendChild(video2);
    slider.appendChild(photo4); 
    slider.appendChild(photo5);
    slider.appendChild(photo6);
    slider.appendChild(video1);
    slider.appendChild(photo7);
    slider.appendChild(photo8);
    slider.appendChild(photo9);
}