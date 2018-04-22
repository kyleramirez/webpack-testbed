import React from "react"
import { hot } from "react-hot-loader"
import StatefulComponent from "StatefulComponent"
import { Ohayo } from "my-library"

function App() {
  return(
    <div>
      <div>{Ohayo("Kyle")}</div>
      <h3>De Toilette Flusher</h3>
      <StatefulComponent />
    </div>
  )
}

export default hot(module)(App)
