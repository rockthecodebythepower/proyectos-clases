export const calculate = (dispatch, input, n1, operation) => {
  switch (operation) {
    case "+":
      dispatch({
        type: "CALCULATE",
        payload: n1 + parseInt(input.current.value),
      });
      break;
    case "-":
      dispatch({
        type: "CALCULATE",
        payload: n1 - parseInt(input.current.value),
      });
      break;
    case "*":
      dispatch({
        type: "CALCULATE",
        payload: n1 * parseInt(input.current.value),
      });
      break;
    case "/":
      dispatch({
        type: "CALCULATE",
        payload: n1 / parseInt(input.current.value),
      });
      break;
    case "%":
      dispatch({
        type: "CALCULATE",
        payload: n1 % parseInt(input.current.value),
      });
      break;
    default:
      break;
  }
  input.current.value = "";
};
