const INIT = {mood: "( ´_ゝ`)"}

const moodReducer = (state = INIT, action) => {
  switch (action.type) {
    case "HAPPY":
      return {...state, mood: "( ͡° ͜ʖ ͡°)"}
    case "SAD":
      return {...state, mood: "┏༼ ◉ ╭╮ ◉༽┓"}
    case "ANGRY":
      return {...state, mood: "(ꐦ ಠ皿ಠ )"}
    case "RELAXED":
      return {...state, mood: "(-ω-)ゝ"}
    default:
      return state
  }
}

const store = Redux.createStore(moodReducer)