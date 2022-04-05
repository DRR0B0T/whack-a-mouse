const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime  = 60
let timerId = null

function randomSquare() {
  squares.forEach(item => {
    item.classList.remove('mole')
  })
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if( square.id === hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 1000)
}
moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
  if (currentTime === 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('Ваша игра окончена! Ваш финальныйй счёт:' + result)
  }
}

let countDownTimerId = setInterval(countDown, 1000)