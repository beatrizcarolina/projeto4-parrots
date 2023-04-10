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
        content += `<div class = "card" onclick = "selectedCard(this)" data-test = "card">`;
        content += `<div class = "face">`;
        content += `<img src="./imagens/back.png" alt = "frontparrot" title="frontparrot" data-test = "face-down-image"></div>`;
        content += `<div class = "back-face face">`;
        content += `<img class = "${cards[i]}" src = "./imagens/${cards[i]}.gif" data-test = "face-up-image"`;
        content += `alt="${cards[i]}" title = "${cards[i]}"></div></div>`
    }
    content += `</div>`;
    main.innerHTML += content;
}
