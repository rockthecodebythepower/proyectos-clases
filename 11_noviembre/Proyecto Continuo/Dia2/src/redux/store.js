import { configureStore } from "@reduxjs/toolkit";
import { clientReducer } from "./clients/clients.reducer";
import { userReducer } from "./users/users.reducer";

export default configureStore({
  reducer: {
    clients: clientReducer,
    users: userReducer
  },
});

/* const { loading, error } = useSelector((state) => state.clients); */

/* const { dispatch } = store; */

/* const dispatch = useDispatch(); */

/* dispatch({ type: "ERROR" }); */

/* import store from "./redux/store.js" */

/* import { useDispatch, useSelector } from "react-redux"; */

// state es el estado que comenzará valiendo lo que vale INITIAL_STATE
// action será un objeto que nos traiga cierta información de lo que debemos realizar y cómo.

// action = { type: "LOADING" }
// action = { type: "ERROR" }
