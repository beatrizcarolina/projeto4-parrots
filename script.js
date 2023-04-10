let numberOfCards = 0;
let listOfCards = [];
let firstCardSelected, secondCardSelected;
let tries = 0;

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
        content += `<div class = "card" onclick = "selectCard(this)" data-test = "card">`;
        content += `<div class = "face">`;
        content += `<img src="./imagens/back.png" alt = "frontparrot" title="frontparrot" data-test = "face-down-image"></div>`;
        content += `<div class = "back-face face">`;
        content += `<img class = "${cards[i]}" src = "./imagens/${cards[i]}.gif" data-test = "face-up-image"`;
        content += `alt="${cards[i]}" title = "${cards[i]}"></div></div>`
    }
    
    content += `</div>`;
    main.innerHTML += content;
}

function selectCard(selected) {
    
    if (secondCardSelected !== null) {
        resetSelectedCards();
    }

    if (firstCardSelected === selected || selected.classList.contains("check")) {
        return;
    }

    tries++;

    if (firstCardSelected == null) {
        firstCardSelected = selected;
        flipCard(firstCardSelected);
        return;
    }

    secondCardSelected = selected;
    flipCard(secondCardSelected);

    const firstCard = firstCardSelected.querySelector(".back-face").querySelector("img").classList[0];
    const secondCard = secondCardSelected.querySelector(".back-face").querySelector("img").classList[0];

    if(firstCard == secondCard) {
        console.log("Cartas Iguais");
        firstCardSelected.classList.add("check");
        secondCardSelected.classList.add("check");
        listOfCards.push(firstCardSelected);
        listOfCards.push(secondCardSelected);
        setTimeout(endGame, 200);
    }
    else {
        console.log("Cartas Diferentes")
        setTimeout(flipCards, 1000);
    }
}

function flipCard(card) {
    frontCard = card.querySelector(".face");
    backCard = card.querySelector(".back-face");

    frontCard.classList.toggle("front");
    backCard.classList.toggle("back");
}

function flipCards(){
    flipCard(firstCardSelected);
    flipCard(secondCardSelected);
}

function resetSelectedCards() {
    firstCardSelected = null;
    secondCardSelected = null;
}

function endGame() {
    if (listOfCards.length < numberOfCards) {
        return;
    }
    alert(`Você ganhou em ${tries} jogadas!`);
}
