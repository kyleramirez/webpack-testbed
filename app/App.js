import React from "react"
import StatefulComponent from "StatefulComponent"
import { Ohayo } from "my-library"

export default function App() {
  return(
    <div>
      <div>{Ohayo("Kyle")}</div>
      <h3>De Toilette Flusher</h3>
      <StatefulComponent />
    </div>
  )
}
