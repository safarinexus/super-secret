export default function congNote() {
    const wishes = document.querySelector(".wishes");
    const curr = document.createElement('div'); 
    curr.classList.add('card'); 
    curr.id = 'cong';
    curr.innerHTML = '<div class="image-slider" id="cong-images"></div>\
                        <div class="from" id="cong-from"> -from cong</div>';

    wishes.appendChild(curr);
}