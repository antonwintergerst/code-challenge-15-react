import React from 'react'
import _ from 'underscore'


export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.createTile = this.createTile.bind(this)
    this.findSurroundingTiles = this.findSurroundingTiles.bind(this)
    this.swapTiles = this.swapTiles.bind(this)
    this.checkUnderscore = this.checkUnderscore.bind(this)
    this.state = {
      win: false,
      tiles: ['1','2','','4','5','6','7','8','3']
    }
  }

  swapTiles(destinationInd, clickedInd) {
    var tiles = this.state.tiles;
    var clickedTileVal = tiles[clickedInd];
    var destinationTileVal = tiles[destinationInd];
    tiles[clickedInd] = destinationTileVal;
    tiles[destinationInd] = clickedTileVal
    this.setState({
      tiles: tiles,
    })
  }

  findSurroundingTiles(clickedIndex, tileArray) {
    console.log(tileArray)
    if (clickedIndex - 3 >= 0) {
      var aboveInd = clickedIndex - 3;
      if (tileArray[aboveInd] == '') {
        this.swapTiles(aboveInd, clickedIndex)
      }
    }
    if (clickedIndex + 3 <= 8) {
      var belowInd = clickedIndex + 3;
      if (tileArray[belowInd] == '') {
        this.swapTiles(belowInd, clickedIndex)
      }
    }
    if (clickedIndex == 1 || clickedIndex == 4 || clickedIndex == 7) {
      var leftInd = clickedIndex - 1;
      var rightInd = clickedIndex + 1;
      if (tileArray[leftInd] == '') {
        this.swapTiles(leftInd, clickedIndex)
      } else if (tileArray[rightInd] == '') {
        this.swapTiles(rightInd, clickedIndex)
      }
    } else if (clickedIndex == 0 || clickedIndex == 3 || clickedIndex == 6) {
      var rightInd = clickedIndex + 1;
      if (tileArray[rightInd] == '') {
        this.swapTiles(rightInd, clickedIndex)
      }
    } else if (clickedIndex == 2 || clickedIndex == 5 || clickedIndex == 8) {
      var leftInd = clickedIndex - 1;
      if (tileArray[leftInd] == '') {
        this.swapTiles(leftInd, clickedIndex)
      }
    }
  }

  createTile(tileObj, index, tileArray) {
    return <div
    className="tile"
    key={index}
    onClick={() => this.findSurroundingTiles(index, tileArray)}>
      <p>{tileObj}</p>
    </div>
  }

  checkUnderscore(array) {
    return _.shuffle(array)
  }

  componentWillMount() {
    var tiles = this.state.tiles
    tiles = _.shuffle(tiles)
    this.setState({
      tiles: tiles
    })
  }

  render() {
    return (
      <div className="board">
         {this.state.tiles.map(this.createTile)}
      </div>
    )
  }
} 