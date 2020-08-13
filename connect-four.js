
// window.addEventListener("DOMContentLoaded", e => {

// });

const game = undefined;

document.getElementById("form-holder").addEventListener("keyup", e => {
    const player1Name = document.getElementById("player-1-name");
    const player2Name = document.getElementById("player-2-name");
    
    if(player1Name.value !== '' && player2Name.value !== '') {
        const newGameBtn = document.getElementById("new-game");
        newGameBtn.disabled = false;
    }
});