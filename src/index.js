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

  /* To add additional object use another key value pair
  separated by: , Also when inside of JS without ' ' encaps
  we cannot use a dash eg - for an inline style object.
  Instead we use camel case eg: backgroundColor*/

  const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    fontSize: 24 // if using a measurement use "24px"
  };
  /* pseudo selectors such as :hover is not able to be
    used in inline styles, if it is a must use then it is at
    this point to be done in CSS using className and in the
    future style libraries and styled components  */

  return (
    <div>
      <h1 style={styles}>Good {timeOfDay}!</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
