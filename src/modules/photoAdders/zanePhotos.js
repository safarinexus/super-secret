import zane1 from '../../assets/zanePhotos/zanePhoto1.jpeg';

export default function zanePhotos() {
    const slider = document.querySelector('#zane-images'); 
    const photo1 = new Image();
    photo1.src = zane1; 
    photo1.style.height = '310px'; 

    slider.appendChild(photo1);
}