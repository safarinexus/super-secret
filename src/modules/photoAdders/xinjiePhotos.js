import xinjie1 from '../../assets/xinjiePhotos/xinjiePhoto1.jpg';
import xinjie2 from '../../assets/xinjiePhotos/xinjiePhoto2.jpg';
import xinjie3 from '../../assets/xinjiePhotos/xinjiePhoto3.jpg';
import xinjie4 from '../../assets/xinjiePhotos/xinjiePhoto4.jpg';
import xinjie5 from '../../assets/xinjiePhotos/xinjiePhoto5.mp4'; 

export default function xinjiePhotos() {
    const slider = document.querySelector('#xin-jie-images'); 
    const photo1 = new Image();
    photo1.src = xinjie1; 
    photo1.style.height = '240px'; 
    const photo2 = new Image();
    photo2.src = xinjie2; 
    photo2.style.height = '240px'; 
    const photo3 = new Image();
    photo3.src = xinjie3; 
    photo3.style.height = '240px';
    const photo4 = new Image();
    photo4.src = xinjie4; 
    photo4.style.height = '240px';
    const video1 = document.createElement('video');
    video1.height = 240;
    video1.src = xinjie5;
    video1.controls = true;
    
    slider.appendChild(photo1); 
    slider.appendChild(photo2); 
    slider.appendChild(photo3); 
    slider.appendChild(photo4); 
    slider.appendChild(video1);
}