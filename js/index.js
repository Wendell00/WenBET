const opt1 = document.querySelector('.opt-1')
const opt2 = document.querySelector('.opt-2')
const optMiddle = document.querySelector('.option-middle')
let betDefined = ''

opt1.addEventListener('click', (e) => {
    opt1.classList.toggle('selectedBet')
    removeSelected(opt2)
    removeSelected(optMiddle)

    betDefined = 'blue'
})

opt2.addEventListener('click', (e) => {
    opt2.classList.toggle('selectedBet')
    removeSelected(opt1)
    removeSelected(optMiddle)

    betDefined = 'green'
})

optMiddle.addEventListener('click', (e) => {
    optMiddle.classList.toggle('selectedBet')
    removeSelected(opt1)
    removeSelected(opt2)

    betDefined = 'orange'
})

function removeSelected(betOpt){
    betOpt.classList.remove('selectedBet')
}
