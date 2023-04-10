let numberOfCards = 0;
let listOfCards = [];

StartGame();

function validGame(numberOfCards) {
    if (numberOfCards > 14 || numberOfCards < 4 || numberOfCards % 2) {
        return false;
    }
    else {
        return true;
    }
}

function StartGame() {
    numberOfCards = 0;
    while(!validGame(numberOfCards)) {
        numberOfCards = prompt('Digite o número de cartas: ');
    }
    createCards();
}


function shuffle() { 
	return Math.random() - 0.5; 
}

function createCards() {
    const cardsImg = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot",
    "revertitparrot", "tripletsparrot", "unicornparrot"];

    const cards = [];

    for (let i=0; cards.length < numberOfCards; i++) {
        cards.push(cardsImg[i]);
        cards.push(cardsImg[i]);
    }

    cards.sort(shuffle);

    const main = document.querySelector(".container");

    let content;
    content = `<div class="cards-container">`;
    for (let i=0; i < numberOfCards; i++) {
        content += i;
    }
    content += `</div>`;
    main.innerHTML += content;
}
