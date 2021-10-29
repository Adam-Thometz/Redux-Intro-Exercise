const moodDisplay = document.querySelector('.moodDisplay')
const happyButton = document.getElementById('happy')
const sadButton = document.getElementById('sad')
const angryButton = document.getElementById('angry')
const relaxedButton = document.getElementById('relaxed')

happyButton.addEventListener('click', function(e) {
  store.dispatch({type: "HAPPY"})
  moodDisplay.innerText = store.getState().mood
})

sadButton.addEventListener('click', function(e) {
  store.dispatch({type: "SAD"})
  moodDisplay.innerText = store.getState().mood
})

angryButton.addEventListener('click', function(e) {
  store.dispatch({type: "ANGRY"})
  moodDisplay.innerText = store.getState().mood
})

relaxedButton.addEventListener('click', function(e) {
  store.dispatch({type: "RELAXED"})
  moodDisplay.innerText = store.getState().mood
})