const stars = [...document.getElementsByClassName("rating__star")];

const stateActive = 'rating__star fas fa-star fa-2x';
const stateInactive = 'rating__star far fa-star fa-2x';

function toggleStars(star) {

    for (let i = 0; i < star.id; i++) {
        const s = stars[i];
        s.className = stateActive;
    }



}