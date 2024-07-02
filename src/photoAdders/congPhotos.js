import cong1 from '../assets/congPhotos/congPhoto1.mp4'; 
import cong2 from '../assets/congPhotos/congPhoto2.mp4'; 
import cong3 from '../assets/congPhotos/congPhoto3.mp4'; 

export default function congPhotos() {
    const slider = document.querySelector('#cong-images'); 

    const video1 = document.createElement('video');
    video1.height = 240;
    video1.src = cong1;
    video1.controls = true;
    const video2 = document.createElement('video');
    video2.height = 240;
    video2.src = cong2;
    video2.controls = true;
    const video3 = document.createElement('video');
    video3.height = 240;
    video3.src = cong3;
    video3.controls = true;

    slider.appendChild(video1);
    slider.appendChild(video2);
    slider.appendChild(video3);
}