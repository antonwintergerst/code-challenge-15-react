import React from 'react'
// import Tile from './Tile'


export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.createTile = this.createTile.bind(this)
    this.findSurroundingTiles = this.findSurroundingTiles.bind(this)
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
        displayed: ''  
      }]
    }
  }

  findSurroundingTiles(tileObj, index, tileArray) {
    if (index - 3 >= 0) {
      var above = index - 3;
      console.log(this.state.tiles[above])
    }
    if (index + 3 <= 8) {
      var below = index + 3;
      console.log(this.state.tiles[below])
    }
    if (index == 1 || index == 4 || index == 7) {
      var left = index - 1;
      var right = index + 1;
      console.log(this.state.tiles[right])
      console.log(this.state.tiles[left])
    } else if (index == 0 || index == 3 || index == 6) {
      var right = index + 1;
      console.log(this.state.tiles[right])
    } else if (index == 2 || index == 5 || index == 8) {
      var left = index - 1;
      console.log(this.state.tiles[left])
    }
  }

  createTile(tileObj, index, tileArray) {
    return <div
    className="tile"
    key={index}
    onClick={() => this.findSurroundingTiles(tileObj, index, tileArray)}>
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