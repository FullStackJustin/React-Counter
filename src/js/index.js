//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let secs = 1;
const timer = setInterval(() => {
	ReactDOM.render(<Home />, document.querySelector("#app"));
	secs++;
}, 1000);
if (secs === 999999) {
	clearInterval(timer);
}
//render your react application
