const amount = document.querySelector('.amount')
let cash = 15
let inGame = false
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
    let valorApostado = betInputValue.value
    if(Number(valorApostado)){
        if(valorApostado <= cash && betDefined != ''){
            cash = cash - valorApostado
            updateCash()
            betElement.classList.add('display-none')
            inGame = true

            if(inGame){
                document.addEventListener('click', (e)=>{
                    if(e.target.classList.contains('bg-card')){
                        e.target.classList.add('display-none')
                    }
                })
            }
        } 
    }
})

function updateCash(){
    let cashString = cash.toString()
    amount.innerHTML = cashString.search('.') == 0 ? cashString + '.00' : cashString
}

const cards = document.querySelectorAll('.card')

// cards.addEventListener('click', (e)=>{
//     console.log(e.target)
// })
