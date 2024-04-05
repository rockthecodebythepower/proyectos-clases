export const INITIAL_STATE = {
  state1: 1,
  state2: 2,
  state3: 3,
  state4: 4,
  state5: 5,
  state6: 6,
  state7: 7,
  state8: 8,
};

export const clientReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, state3: "loading", state4: action.payload };
    case "LOADING_STOP":
      return { ...state, state3: null, state1: null, state8: true };
    default:
      break;
  }
};
