import { render } from '@testing-library/react'
import React from 'react'


function App() {
  render() {
    return (
      <div className="player">
        <h1>TIC TAC TOE</h1>
        <h2 className="player1">Player X</h2>
        <h2 className="player1">Wins </h2>
        <h2 className="player2">Player O</h2>
        <h2 className="player2">Wins </h2>
        <Board/>
      </div>
  )
}
}

export default App
