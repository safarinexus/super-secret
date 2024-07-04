export default function addNote(person, note, photo=false) {
    const newID = (function replaceWhitespaceWithDash(str) {
        return str.replace(/\s+/g, '-');
    })(person);


    const wishes = document.querySelector(".wishes");
    const curr = document.createElement('div'); 
    curr.classList.add('card'); 

    curr.id = newID; 
    if (photo) {
        curr.innerHTML = '<div class="image-slider" id="' + newID +'-images"></div>\
                        <div class="note" id="' + newID + '-note">&quot;' + note + '&quot;</div>\
                        <div class="from" id="' + newID + '-from"> -from ' + person + '</div>';
    } else {
        curr.innerHTML = '<div class="note" id="' + newID + '-note">&quot;' + note + '&quot;</div>\
                        <div class="from" id="' + newID + '-from"> -from ' + person + '</div>';
    }
                        
    wishes.appendChild(curr);
}   