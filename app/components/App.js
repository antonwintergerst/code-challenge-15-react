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

  // shuffle the array of tiles before rendering
  componentWillMount() {
    var tiles = this.state.tiles
    tiles = _.shuffle(tiles)
    this.setState({
      tiles: tiles
    })
  }

  // reshuffle the array of tiles and set win to false
  reset() {
    var tiles = this.state.tiles;
    tiles = _.shuffle(tiles);
    this.setState({
      tiles: tiles,
      win: false
    })
  }

  // check for equality between the contents of tiles array and win scenario array
  // set win to true if equal
  setWin() {
    var tiles = this.state.tiles.join()
    var winScenario = this.state.winScenario.join()
    if (tiles === winScenario) {
      this.setState({
        win: true
      })
    }
  }

  // swap the values of the clicked tile and empty tile, then run setWin to check if player has won
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

  // only runs while player has not won
  // this checks to see if the empty tile is within moving distance of the clicked tile, if it is, it passes the indexes of the two tiles into the swapTiles function
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

  // creates a div element for each element in the 'tiles' array within state
  // each div created has a click listener that calls the findSurroundingTiles function and passes in its own index value as well as the full array of tiles from state
  createTile(tile, indexOfTile, tilesArr) {
    return <div
    className="tile"
    key={indexOfTile}
    onClick={() => this.findSurroundingTiles(indexOfTile, tilesArr)}>
      <p>{tile}</p>
    </div>
  }

  // render a button to allow players to reset the puzzle
  // render the board that the puzzle is contained within
  // the array of 'tiles' in the state are mapped to divs using the createTile function
  // render a win message only when winstate is true
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