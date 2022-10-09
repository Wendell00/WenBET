const amount = document.querySelector('.amount')
const btnRecarregar = document.querySelector('.btn-recarregar')
let cash = 15
let inGame = false
let intervalo = ''
let valorApostado = 0
let answer = ''
updateCash()

const opt1 = document.querySelector('.opt-1')
const opt2 = document.querySelector('.opt-2')
const optMiddle = document.querySelector('.option-middle')
const betElement = document.querySelector('.betElement')
let betDefined = ''

opt1.addEventListener('click', (e) => {
    opt1.classList.toggle('selectedBet')
    removeSelected(opt2)
    removeSelected(optMiddle)

    if(opt1.classList.contains('selectedBet')) betDefined = 'blue'
    else betDefined = ''
})

opt2.addEventListener('click', (e) => {
    opt2.classList.toggle('selectedBet')
    removeSelected(opt1)
    removeSelected(optMiddle)

    if(opt2.classList.contains('selectedBet')) betDefined = 'orange'
    else betDefined = ''
})

optMiddle.addEventListener('click', (e) => {
    optMiddle.classList.toggle('selectedBet')
    removeSelected(opt1)
    removeSelected(opt2)

    if(optMiddle.classList.contains('selectedBet')) betDefined = 'green'
    else betDefined = ''
})

function removeSelected(betOpt){
    betOpt.classList.remove('selectedBet')
}


const betInputValue = document.querySelector('.betInput')
const btnBet = document.querySelector('.btnBet')

btnBet.addEventListener('click', (e)=>{
    e.preventDefault()
    valorApostado = betInputValue.value
    if(Number(valorApostado)){
        if(valorApostado <= cash && betDefined != ''){
            cash = cash - valorApostado
            inGame = true
            updateCash()
            betElement.classList.add('display-none')

            document.addEventListener('click', (e)=>{
                if(e.target.classList.contains('bg-card') && inGame){
                    shuffleBet()
                    e.target.classList.add('display-none')
                    answer = e.target.parentElement.children[1].src
                    checkResult(answer, valorApostado)
                }
            })
            
        } 
    }
})

function checkResult(answerParam, betAmountParam){

    switch(true){
        case answerParam.search('Laranja') > 0 && betDefined == 'orange':
            inGame = false
            cash = cash + (betAmountParam * 2)
            updateCash()
            console.log('deu laranja')
            intervalAfterGame() 
            break;
        case answerParam.search('Verde') > 0 && betDefined == 'green':
            inGame = false
            cash = cash + (betAmountParam * 4)
            updateCash()
            console.log('deu green')
            intervalAfterGame() 
            break;
        case answerParam.search('Azul') > 0 && betDefined == 'blue':
            inGame = false
            cash = cash + (betAmountParam * 2)
            updateCash()
            console.log('deu azul')
            intervalAfterGame() 
            break;
        default: 
            inGame = false
            updateCash()
            intervalAfterGame() 
    }

}

function updateCash(recarregar = false){
    if(cash > 0){btnRecarregar.classList.add('display-none')}else if(cash <= 0 && !inGame){btnRecarregar.classList.remove('display-none')}
    let cashString = ''
    cashString = cash.toString()
    amount.innerHTML = cashString.search('.') == 0 ? cashString + '.00' : cashString
}

const cardImg = document.querySelectorAll('.imgCard')
let listForShuffleBet = ['img/logoTesteAzul.png','img/logoTesteAzul.png','img/logoTesteAzul.png','img/logoTesteVerde.png','img/logoTesteLaranja.png','img/logoTesteLaranja.png','img/logoTesteLaranja.png']

function shuffleBet(){
    listForShuffleBet.sort(()=> Math.random() - 0.5)
    for(let counter = 0; counter < cardImg.length; counter++){
        cardImg[counter].src = listForShuffleBet[counter]
    }
}

shuffleBet()

function intervalAfterGame(){
    betElement.classList.remove('display-none')
    let bgCard = document.querySelectorAll(".bg-card");
    bgCard.forEach(cardParam => {
        btnBet.disabled = true
        intervalo = setTimeout(function(){ 
            cardParam.classList.remove("display-none"); 
            btnBet.disabled = false
            for(let counter = 0; counter < cardImg.length; counter++){
                cardImg[counter].src = ''
            }
        }, 3000)
    });
}


btnRecarregar.addEventListener('click', ()=>{
    cash = 15
    updateCash()
})