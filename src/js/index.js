"use strict";
const amount = document.querySelector('.amount');
const btnRecarregar = document.querySelector('.btn-recarregar');
let cash = 15;
let inGame = false;
let intervalo;
let intervalo2;
let valorApostado;
let answer;
let answerSrc;
let imgCardSelected;
updateCash();
const opt1 = document.querySelector('.opt-1');
const opt2 = document.querySelector('.opt-2');
const optMiddle = document.querySelector('.option-middle');
const betElement = document.querySelector('.betElement');
let betDefined = '';
opt1.addEventListener('click', () => {
    opt1.classList.toggle('selectedBet');
    removeSelected(opt2);
    removeSelected(optMiddle);
    if (opt1.classList.contains('selectedBet'))
        betDefined = 'blue';
    else
        betDefined = '';
});
opt2.addEventListener('click', () => {
    opt2.classList.toggle('selectedBet');
    removeSelected(opt1);
    removeSelected(optMiddle);
    if (opt2.classList.contains('selectedBet'))
        betDefined = 'orange';
    else
        betDefined = '';
});
optMiddle.addEventListener('click', () => {
    optMiddle.classList.toggle('selectedBet');
    removeSelected(opt1);
    removeSelected(opt2);
    if (optMiddle.classList.contains('selectedBet'))
        betDefined = 'green';
    else
        betDefined = '';
});
function removeSelected(betOpt) {
    betOpt.classList.remove('selectedBet');
}
const betInputValue = document.querySelector('.betInput');
const btnBet = document.querySelector('.btnBet');
btnBet.addEventListener('click', (e) => {
    e.preventDefault();
    valorApostado = Number(betInputValue.value);
    if (typeof valorApostado == 'number') {
        if (valorApostado <= cash && betDefined != '') {
            cash = cash - valorApostado;
            inGame = true;
            updateCash();
            const betImg = betElement.children[2].children[1];
            betImg.src =
                betDefined == 'blue'
                    ? 'src/img/logoTesteAzul.png'
                    : betDefined == 'green'
                        ? 'src/img/logoTesteVerde.png'
                        : betDefined == 'orange'
                            ? 'src/img/logoTesteLaranja.png'
                            : '.';
            betElement.children[3].children[1].innerHTML = `<span>R$</span> ${valorApostado}.00`;
            betDisplay(betElement, inGame);
            document.addEventListener('click', (e) => {
                if (e.target instanceof Element) {
                    if (e.target.classList.contains('bg-card') && inGame) {
                        imgCardSelected = e.target.parentElement;
                        shuffleBet();
                        e.target.classList.add('display-none');
                        answer = imgCardSelected.children[1];
                        answerSrc = answer.src;
                        checkResult(answerSrc, valorApostado, imgCardSelected);
                    }
                }
            });
        }
    }
});
function checkResult(answerParam, betAmountParam, imgCardSelected) {
    switch (true) {
        case answerParam.search('Laranja') > 0 && betDefined == 'orange':
            inGame = false;
            cash = cash + betAmountParam * 2;
            updateCash();
            console.log('deu laranja');
            intervalAfterGame(imgCardSelected);
            break;
        case answerParam.search('Verde') > 0 && betDefined == 'green':
            inGame = false;
            cash = cash + betAmountParam * 4;
            updateCash();
            console.log('deu green');
            intervalAfterGame(imgCardSelected);
            break;
        case answerParam.search('Azul') > 0 && betDefined == 'blue':
            inGame = false;
            cash = cash + betAmountParam * 2;
            updateCash();
            console.log('deu azul');
            intervalAfterGame(imgCardSelected);
            break;
        default:
            inGame = false;
            updateCash();
            intervalAfterGame(imgCardSelected);
    }
}
function updateCash() {
    if (cash > 0) {
        btnRecarregar.classList.add('display-none');
    }
    else if (cash <= 0 && !inGame) {
        btnRecarregar.classList.remove('display-none');
    }
    let cashString = '';
    cashString = cash.toString();
    amount.innerHTML = cashString.search('.') == 0 ? cashString + '.00' : cashString;
}
const cardImg = document.querySelectorAll('.imgCard');
let cardImgFor;
const listForShuffleBet = [
    'src/img/logoTesteAzul.png',
    'src/img/logoTesteAzul.png',
    'src/img/logoTesteAzul.png',
    'src/img/logoTesteVerde.png',
    'src/img/logoTesteLaranja.png',
    'src/img/logoTesteLaranja.png',
    'src/img/logoTesteLaranja.png',
];
function shuffleBet() {
    listForShuffleBet.sort(() => Math.random() - 0.5);
    for (let counter = 0; counter < cardImg.length; counter++) {
        cardImgFor = cardImg[counter];
        cardImgFor.classList.remove('display-none');
        cardImgFor.src = listForShuffleBet[counter];
    }
}
shuffleBet();
function intervalAfterGame(imgCardSelected) {
    const bgCard = document.querySelectorAll('.bg-card');
    bgCard.forEach((cardParam) => {
        btnBet.disabled = true;
        intervalo = setTimeout(function () {
            cardParam.classList.add('opacity-none');
            imgCardSelected.classList.add('card-selected');
            console.log(typeof intervalo);
            intervalo2 = setTimeout(function () {
                cardParam.classList.remove('display-none');
                btnBet.disabled = false;
                for (let counter = 0; counter < cardImg.length; counter++) {
                    cardImg[counter].classList.add('display-none');
                }
                cardParam.classList.remove('opacity-none');
                imgCardSelected.classList.remove('card-selected');
                betDisplay(betElement, inGame);
            }, 2000);
        }, 2000);
    });
}
function betDisplay(elementParam, inGameParam) {
    if (inGameParam) {
        elementParam.children[0].classList.add('display-none');
        elementParam.children[1].classList.add('display-none');
        elementParam.children[2].classList.remove('display-none');
        elementParam.children[3].classList.remove('display-none');
    }
    else {
        elementParam.children[0].classList.remove('display-none');
        elementParam.children[1].classList.remove('display-none');
        elementParam.children[2].classList.add('display-none');
        elementParam.children[3].classList.add('display-none');
    }
}
btnRecarregar.addEventListener('click', () => {
    cash = 15;
    updateCash();
});
