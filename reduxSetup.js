const INIT = {mood: "( ´_ゝ`)"}

const moodReducer = (state = INIT, action) => {
  switch (action.type) {
    case "HAPPY":
      return {...state, mood: action.payload}
    case "SAD":
      return {...state, mood: action.payload}
    case "ANGRY":
      return {...state, mood: action.payload}
    case "RELAXED":
      return {...state, mood: action.payload}
    default:
      return state
  }
}

const store = Redux.createStore(moodReducer)