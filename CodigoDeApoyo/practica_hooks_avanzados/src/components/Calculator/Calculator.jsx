import { useReducer, useRef, memo, useCallback, useMemo } from "react";
import "./Calculator.css";
import { calculate } from "../../utils/calculate";

const INITIAL_CALCULATOR_STATE = {
  n1: 0,
  operation: "",
  result: 0,
  historicResults: [],
  historicResultsSorted: [],
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "SET_OPERATION":
      return {
        ...state,
        n1: parseInt(action.payload.inputValue),
        operation: action.payload.operation,
      };
    case "CALCULATE":
      return {
        ...state,
        result: action.payload,
        n1: 0,
        operation: "",
        historicResults: [...state.historicResults, action.payload],
      };
    case "SORT":
      return { ...state, historicResultsSorted: [...action.payload] };
    default:
      return state;
  }
};

const Calculator = memo(() => {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    INITIAL_CALCULATOR_STATE
  );

  const input = useRef();

  const { result, operation, n1, historicResults, historicResultsSorted } =
    state;

  const setOperation = useCallback(
    (operation) => {
      dispatch({
        type: "SET_OPERATION",
        payload: { inputValue: input.current.value, operation: operation },
      });
      input.current.value = "";
    },
    [operation]
  );

  useMemo(() => {
    dispatch({
      type: "SORT",
      payload: historicResults.toSorted((a, b) => a - b),
    });
  }, [historicResults]);

  return (
    <div className="calc">
      <input type="number" ref={input} />
      <div className="operations">
        <button onClick={() => setOperation("+")}>+</button>
        <button onClick={() => setOperation("-")}>-</button>
        <button onClick={() => setOperation("*")}>X</button>
        <button onClick={() => setOperation("/")}>/</button>
        <button onClick={() => setOperation("%")}>%</button>
        <button onClick={() => calculate(dispatch, input, n1, operation)}>
          =
        </button>
      </div>
      <h2>Último resultado: {result}</h2>
      <div className="historic">
        <h2>Resultados históricos</h2>
        {historicResultsSorted.map((resultH, index) => (
          <h3 key={index}>{resultH}</h3>
        ))}
      </div>
    </div>
  );
});

export default Calculator;
