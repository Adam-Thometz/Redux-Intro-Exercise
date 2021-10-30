const moodDisplay = document.querySelector('.moodDisplay')
const happyButton = document.getElementById('happy')
const sadButton = document.getElementById('sad')
const angryButton = document.getElementById('angry')
const relaxedButton = document.getElementById('relaxed')
const randomButton = document.getElementById('random')

const moods = [
  ["HAPPY", "rgb(207, 207, 14)", "( ͡° ͜ʖ ͡°)"],
  ["SAD", "rgb(67, 67, 224)", "┏༼ ◉ ╭╮ ◉༽┓"],
  ["ANGRY", "rgb(255, 52, 52)", "(ꐦ ಠ皿ಠ )"],
  ["RELAXED", "rgb(50, 175, 50)", "(-ω-)ゝ"]
]

happyButton.addEventListener('click', function(e) {
  store.dispatch({type: moods[0][0], payload: moods[0][2]})
  document.body.style.backgroundColor = moods[0][1]
})

sadButton.addEventListener('click', function(e) {
  store.dispatch({type: moods[1][0], payload: moods[1][2]})
  document.body.style.backgroundColor = moods[1][1]
})

angryButton.addEventListener('click', function(e) {
  store.dispatch({type: moods[2][0], payload: moods[2][2]})
  document.body.style.backgroundColor = moods[2][1]
})

relaxedButton.addEventListener('click', function(e) {
  store.dispatch({type: moods[3][0], payload: moods[3][2]})
  document.body.style.backgroundColor = moods[3][1]
})

randomButton.addEventListener('click', function(e) {
  const idx = Math.floor(Math.random() * moods.length)
  store.dispatch({type: moods[idx][0], payload: moods[idx][2]})
  document.body.style.backgroundColor = moods[idx][1]
})

function changeMood() {
  moodDisplay.innerText = store.getState().mood
}

changeMood()
store.subscribe(changeMood)