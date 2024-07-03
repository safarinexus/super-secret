import bernice1 from '../../assets/bernicePhotos/bernicePhoto1.mp4';


export default function bernicePhotos() {
    const slider = document.querySelector('#bernice-images'); 
    const video1 = document.createElement('video');
    video1.height = 240;
    video1.src = bernice1;
    video1.controls = true;

    slider.appendChild(video1);
}