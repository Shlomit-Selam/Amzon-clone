import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGPVQ-6EFkDSeH7wxkW21jaRhyI_W-6jg",
  authDomain: "clone-e1aa7.firebaseapp.com",
  projectId: "clone-e1aa7",
  storageBucket: "clone-e1aa7.appspot.com",
  messagingSenderId: "278770807309",
  appId: "1:278770807309:web:5a4eba073601c3de275b44",
  measurementId: "G-NHK69Y44BH"
};