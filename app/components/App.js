import React from 'react'
import Game from './Game'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1> 15 </h1>
        <Game />
      </div>
    )
  }
}   

module.exports = App