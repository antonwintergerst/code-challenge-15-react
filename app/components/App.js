import React from 'react'
import Puzzle from './Puzzle'

class App extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    return <div className="game-container">
      <h1 className="title">Puzzle Board</h1>
      <Puzzle />
    </div>
  }
}

module.exports = App