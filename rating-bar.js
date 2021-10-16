const stars = document.getElementById("rating__star");

const stateActive = 'rating__star fas fa-star fa-2x';
const stateInactive = 'rating__star far fa-star fa-2x';

function toggleStar(star) {
    if (star.className === 'rating__star fas fa-star fa-2x') {
        star.className = 'rating__star far fa-star fa-2x';
    } else {
        star.className = 'rating__star fas fa-star fa-2x'
    }

}