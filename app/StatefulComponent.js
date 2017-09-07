import React, { Component } from "react"

export default class StatefulComponent extends Component {
  state = { flushes: 0 }
  flushToilet = () => this.setState({ flushes: this.state.flushes + 1 })
  render() {
    const { state, flushToilet } = this;
    return(
      <div>
        <pre>Flushes: {state.flushes}</pre>
        <button onClick={flushToilet}>
          Flush De Toilette
        </button>
      </div>
    )
  }
}
