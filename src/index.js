import React from "react"
import ReactDOM from "react-dom"

function App() {
  const firstName = "Johnny"
  const lastName = "Mnemonic"

  return ( // In here is JSX
    <div>
    {/* Use JS inside of our JSX with: { } */}
    <h1>Hello {firstName + " " + lastName}!</h1>
    {/* ES6 JS string templating syntax ES6 */}
    <h2>Hello {`${firstName} ${lastName} }`}</h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))