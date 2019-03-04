import React from "react";
import ReactDOM from "react-dom";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    /* JSX expects insline style not to be a string but a
    JS object so use: { } but seen as though objects are
    also wrapped w: { } we need two sets */
    /* To add additional object use another key value pair
    separated by: , Also when inside of JS without ' ' encaps
    we cannot use a dash eg - for an inline style object.
    Instead we use camel case eg: backgroundColor*/
    <div>
      <h1 style={{ color: "#FF8C00", backgroundColor: "#FF2D00" }}>
        Good {timeOfDay}!
      </h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
