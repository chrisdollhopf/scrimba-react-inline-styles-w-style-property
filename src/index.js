import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()
    const hours = date.getHours()

    return (
      <h1>Is is currently about {date.getHours() % 12} o'clock</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))