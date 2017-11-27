import React from 'react'
import _ from 'underscore'
// import Tile from './Tile'


export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.createTile = this.createTile.bind(this)
    this.findSurroundingTiles = this.findSurroundingTiles.bind(this)
    this.swapTiles = this.swapTiles.bind(this)
    // this.componentWillMount = this.componentWillMount.bind(this)
    this.checkUnderscore = this.checkUnderscore.bind(this)
    this.state = {
      win: false,
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

  swapTiles(aboveInd, clickedInd) {
    var tiles = this.state.tiles;
    var clickedTileVal = tiles[clickedInd].displayed;
    var aboveTileVal = tiles[aboveInd].displayed;
    tiles[clickedInd].displayed = aboveTileVal;
    tiles[aboveInd].displayed = clickedTileVal
    this.setState({
      tiles: tiles,
    })
  }

  findSurroundingTiles(clickedIndex, tileArray) {
    if (clickedIndex - 3 >= 0) {
      var aboveInd = clickedIndex - 3;
      if (tileArray[aboveInd].displayed == "") {
        this.swapTiles(aboveInd, clickedIndex)
      }
    }
    if (clickedIndex + 3 <= 8) {
      var belowInd = clickedIndex + 3;
      if (tileArray[belowInd].displayed == "") {
        this.swapTiles(belowInd, clickedIndex)
      }
    }
    if (clickedIndex == 1 || clickedIndex == 4 || clickedIndex == 7) {
      var leftInd = clickedIndex - 1;
      var rightInd = clickedIndex + 1;
      if (tileArray[leftInd].displayed == "") {
        this.swapTiles(leftInd, clickedIndex)
      } else if (tileArray[rightInd].displayed == "") {
        this.swapTiles(rightInd, clickedIndex)
      }
    } else if (clickedIndex == 0 || clickedIndex == 3 || clickedIndex == 6) {
      var rightInd = clickedIndex + 1;
      if (tileArray[rightInd].displayed == "") {
        this.swapTiles(rightInd, clickedIndex)
      }
    } else if (clickedIndex == 2 || clickedIndex == 5 || clickedIndex == 8) {
      var leftInd = clickedIndex - 1;
      if (tileArray[leftInd].displayed == "") {
        this.swapTiles(leftInd, clickedIndex)
      }
    }
  }

  createTile(tileObj, index, tileArray) {
    return <div
    className="tile"
    key={index}
    onClick={() => this.findSurroundingTiles(index, tileArray)}>
      <p>{tileObj.displayed}</p>
    </div>
  }

  checkUnderscore(array) {
    return _.shuffle(array)
  }

  // componentWillMount() {
  //   var tiles = this.state.tiles
  //   var tiles.map
  // }

  render() {
    let testArray = [1,2,3,4,5,6];
    return (
      <div className="board">
         {this.state.tiles.map(this.createTile)}
        <div>
          <p>{this.checkUnderscore(testArray)}</p>
        </div>
      </div>
    )
  }
} 