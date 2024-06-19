let counterLeft = 0;
let counterRight = 0;


const incrementleft = document.getElementById('left');
const incrementright = document.getElementById('right');


function incrementCounterLeft(event) {
    event.preventDefault();
    counterLeft++;
    incrementleft.textContent = `Contor: ${counterLeft}`;
}

function incrementCounterRight(event) {
    event.preventDefault();
    counterRight++;
    incrementright.textContent = `Contor: ${counterRight}`;
}


incrementleft.addEventListener('click', incrementCounterLeft);
incrementright.addEventListener('click', incrementCounterRight);
