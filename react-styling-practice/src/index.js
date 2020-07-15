//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const current = new Date(2020, 7, 15, 2).getHours();
let message;
const customColor = {
  color: ""
};

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

if (current <= 12) {
  message = "Good Morning";
  customColor.color = "red";
} else if (current <= 18) {
  message = "Good Afternoon";
  customColor.color = "green";
} else if (current <= 23) {
  message = "Good Evenning";
  customColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customColor}>
    {message}
  </h1>,
  document.getElementById("root")
);
