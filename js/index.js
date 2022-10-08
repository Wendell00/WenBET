const opt1 = document.querySelector('.opt-1')
const opt2 = document.querySelector('.opt-2')
const optMiddle = document.querySelector('.option-middle')
let betDefined = ''

const betInputValue = document.querySelector('.betInput').innerHTML

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
