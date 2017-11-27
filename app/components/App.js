import React from 'react'
import _ from 'underscore'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.createTile = this.createTile.bind(this)
    this.findSurroundingTiles = this.findSurroundingTiles.bind(this)
    this.swapTiles = this.swapTiles.bind(this)
    this.setWin = this.setWin.bind(this)
    this.reset = this.reset.bind(this)
    this.state = {
      win: false,
      winScenario: ['1','2','3','4','5','6','7','8',''],
      tiles: ['1','2','3','4','5','6','7','','8']
    }
  }

  componentWillMount() {
    var tiles = this.state.tiles
    tiles = _.shuffle(tiles)
    this.setState({
      tiles: tiles
    })
  }

  reset() {
    var tiles = this.state.tiles;
    tiles = _.shuffle(tiles);
    this.setState({
      tiles: tiles,
      win: false
    })
  }

  setWin() {
    var tiles = this.state.tiles.join()
    var winScenario = this.state.winScenario.join()
    if (tiles === winScenario) {
      this.setState({
        win: true
      })
    }
  }

  swapTiles(emptyTile, clickedTile) {
    var tiles = this.state.tiles;
    var clickedValue = tiles[clickedTile];
    var emptyValue = tiles[emptyTile];
    tiles[clickedTile] = emptyValue;
    tiles[emptyTile] = clickedValue;
    this.setState({
      tiles: tiles,
    })
    this.setWin();
  }

  findSurroundingTiles(clickedIndex, tilesArray) {
    if (this.state.win === false) {
      if (clickedIndex - 3 >= 0) {
        var aboveInd = clickedIndex - 3;
        if (tilesArray[aboveInd] === '') {
          this.swapTiles(aboveInd, clickedIndex)
        }
      }
      if (clickedIndex + 3 <= 8) {
        var belowInd = clickedIndex + 3;
        if (tilesArray[belowInd] === '') {
          this.swapTiles(belowInd, clickedIndex)
        }
      }
      if (clickedIndex === 1 || clickedIndex === 4 || clickedIndex === 7) {
        var leftInd = clickedIndex - 1;
        var rightInd = clickedIndex + 1;
        if (tilesArray[leftInd] === '') {
          this.swapTiles(leftInd, clickedIndex)
        } else if (tilesArray[rightInd] === '') {
          this.swapTiles(rightInd, clickedIndex)
        }
      } else if (clickedIndex === 0 || clickedIndex === 3 || clickedIndex === 6) {
        var rightInd = clickedIndex + 1;
        if (tilesArray[rightInd] === '') {
          this.swapTiles(rightInd, clickedIndex)
        }
      } else if (clickedIndex === 2 || clickedIndex === 5 || clickedIndex === 8) {
        var leftInd = clickedIndex - 1;
        if (tilesArray[leftInd] === '') {
          this.swapTiles(leftInd, clickedIndex)
        }
      }
    }
  }

  createTile(tile, indexOfTile, tilesArr) {
    return <div
    className="tile"
    key={indexOfTile}
    onClick={() => this.findSurroundingTiles(indexOfTile, tilesArr)}>
      <p>{tile}</p>
    </div>
  }

  render() {
    var winState = this.state.win;
    return (
      <div>
        <button onClick={() => this.reset()} > reset </button>
        <div className="board">
          {this.state.tiles.map(this.createTile)}
        </div>
        {winState && <p>you win, well done</p>}
      </div>     
    )
  }
} 