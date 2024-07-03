import kim1 from '../../assets/kimPhotos/kimPhoto1.jpg'; 
import kim2 from '../../assets/kimPhotos/kimPhoto2.jpg';
import kim3 from '../../assets/kimPhotos/kimPhoto3.jpg';
import kim4 from '../../assets/kimPhotos/kimPhoto4.mp4';
import kim5 from '../../assets/kimPhotos/kimPhoto5.mp4';
import kim6 from '../../assets/kimPhotos/kimPhoto6.jpg';
import kim7 from '../../assets/kimPhotos/kimPhoto7.jpg';




export default function kimPhotos() {
    const slider = document.querySelector('#kim-images'); 
    const photo1 = new Image();
    photo1.src = kim1; 
    photo1.style.height = '240px'; 
    const photo2 = new Image();
    photo2.src = kim2; 
    photo2.style.height = '240px'; 
    const photo3 = new Image();
    photo3.src = kim3; 
    photo3.style.height = '240px'; 
    const video1 = document.createElement('video');
    video1.height = 240;
    video1.src = kim4;
    video1.controls = true;
    const video2 = document.createElement('video');
    video2.height = 240;
    video2.src = kim5;
    video2.controls = true;
    const photo6 = new Image();
    photo6.src = kim6; 
    photo6.style.height = '240px';
    const photo7 = new Image();
    photo7.src = kim7; 
    photo7.style.height = '240px'; 
    
    slider.appendChild(photo1); 
    slider.appendChild(photo2);
    slider.appendChild(photo3);
    slider.appendChild(video1); 
    slider.appendChild(video2);
    slider.appendChild(photo6);
    slider.appendChild(photo7);
}