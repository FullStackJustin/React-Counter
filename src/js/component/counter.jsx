import React from "react";

export const Counter = (props) => {
	let intialTimer = "000000";
	let seconds = props.seconds.toString();
	return <div>{intialTimer}</div>;
};
Counter.PropTypes = {
	seconds: PropTypes.string,
};
