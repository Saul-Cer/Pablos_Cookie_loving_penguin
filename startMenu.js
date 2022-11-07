const loadGame = document.querySelector('#loadGameBtn');

function redirectToGame() {
    window.location = "whacAMole.html"
}

loadGame.addEventListener("mousedown", () => {
    redirectToGame();
    console.log('HELP PABLO PENGUIN BTN ClICKED')
})



// make it so menu from first menu disappears and stuff from load game appears in one page
// using ---->
// display:none;