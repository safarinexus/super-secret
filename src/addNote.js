export default function addNote(person, note, photo=false) {
    const wishes = document.querySelector(".wishes");
    const curr = document.createElement('div'); 
    curr.classList.add('card'); 
    curr.id = person; 
    if (photo) {
        curr.innerHTML = '<div class="image-slider" id="' + person +'-images"></div>\
                        <div class="note" id="' + person + '-note">&quot;' + note + '&quot;</div>\
                        <div class="from" id="' + person + '-from"> -from ' + person + '</div>';
    } else {
        curr.innerHTML = '<div class="note" id="' + person + '-note">&quot;' + note + '&quot;</div>\
                        <div class="from" id="' + person + '-from"> -from ' + person + '</div>';
    }
                        
    wishes.appendChild(curr);
}   