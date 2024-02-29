// Get the Espresso and Table ID's from HTML and declare them as cup and table variable's.
const cup = document.getElementById("Espresso_On_Table");

function pop_in(){
    cup.style.transitionDuration = `0.2s`;
    cup.style.transform = `translate(-50%, -50%) scale(1.5)`;

    setTimeout(() => {
        cup.style.transitionDuration = `0.7s`;
        cup.style.transform = `translate(-50%, -50%) scale(1)`;
    });
}

// window.addEventListener(`keyup`, event => {
//     if(event.keyup === a) pop_in();
// })

window.onload = function() {
    pop_in();
};