import React from "react";
import ReactDOM from "react-dom";

function App() {
  /* Changing the date parameter to see the different JS
  styles in effect */

  const date = new Date(2018, 8, 2, 10);
  const hours = date.getHours();
  let timeOfDay;
  /* One reason to use inline styles like this is for
  something to be more dynamic in which case JS would
  determine what the styles are. That would look like
  this: */
  const styles = {
    fontSize: "30px"
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#99FF33";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#FF5733";
  } else {
    timeOfDay = "night";
    styles.color = "#5E33FF";
  }

  return (
    <div>
      <h1 style={styles}>Good {timeOfDay}!</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
