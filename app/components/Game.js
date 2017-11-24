import React from 'react'
// import Tile from './Tile'


export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.createTile = this.createTile.bind(this)
    this.moveTile = this.moveTile.bind(this)
    this.state = {
      tiles: [
      {
        displayed: '1'  
      },
      {
        displayed: '2'  
      },
      {
        displayed: '3'  
      },
      {
        displayed: '4'  
      },
      {
        displayed: '5'  
      },
      {
        displayed: '6'  
      },
      {
        displayed: '7'  
      },
      {
        displayed: '8'  
      },
      {
        displayed: 'blank'  
      }]
    }
  }

  moveTile(event) {
    console.log(event.target)
  }

  createTile(tileObj, index) {
    return <div
    className="tile"
    key={index}
    onClick={(event) => this.moveTile(event)}>
      <p>{tileObj.displayed}</p>
    </div>
  }

  render() {
    return (
      <div className="board">
         {this.state.tiles.map(this.createTile)}
      </div>
    )
  }
} 