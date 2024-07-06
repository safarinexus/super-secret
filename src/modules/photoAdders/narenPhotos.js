import naren1 from '../../assets/narenPhotos/narenPhoto1.jpeg';

export default function narenPhotos() {
    const slider = document.querySelector('#naren-images'); 
    const photo1 = new Image();
    photo1.src = naren1; 
    photo1.style.height = '310px'; 

    slider.appendChild(photo1);
}