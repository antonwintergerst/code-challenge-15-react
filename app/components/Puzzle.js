import React from 'react'
import Square from './Square'
import checkGameStatus from '../lib/checkGameStatus'
import randomiseSquares from '../lib/randomiseSquares'
import swapItems from '../lib/swapItems'
import _ from 'underscore'
// import $ from 'jquery'

export default class Puzzle extends React.Component
{
  constructor(props)
  {
    super(props)
    this.moveSquare = this.moveSquare.bind(this)
    this.state =
    {
      finishedGame: false,
      squares:
      [
        {
          value: '1',
          coordinates: [1, 1],
          validMove: false
        },
        {
          value: '2',
          coordinates: [1, 2],
          validMove: false
        },
        {
          value: '3',
          coordinates: [1, 3],
          validMove: false
        },
        {
          value: '4',
          coordinates: [2, 1],
          validMove: false
        },
        {
          value: '5',
          coordinates: [2, 2],
          validMove: false
        },
        {
          value: '6',
          coordinates: [2, 3],
          validMove: false
        },
        {
          value: '7',
          coordinates: [3, 1],
          validMove: false
        },
        {
          value: '8',
          coordinates: [3, 2],
          validMove: false
        },
        {
          value: 'empty',
          coordinates: [3, 3],
          validMove: false
        }
      ]
    }
  }

  // componentWillMount()
  // {
  //   randomiseSquares(this.state.squares)
  // }

  checkMove(numSquare, indexOfSquare, blankSquare, indexOfBlankSquare)
  {
    var squares = this.state.squares
    _.map(squares, function(square){ return square.validMove = 'false' })
    var calculateX = blankSquare.coordinates[0] - numSquare.coordinates[0]
    var calculateY = blankSquare.coordinates[1] - numSquare.coordinates[1]
    if ((Math.abs(calculateX) === 1 && Math.abs(calculateY) === 0) || (Math.abs(calculateX) === 0 && Math.abs(calculateY) === 1))
    {
      squares[indexOfSquare].validMove = true
    }
    // (3, 1) to (3, 2) yes (0, 1)
    // (3, 1) to (2, 1) yes (1, 0)
    // (3, 2) to (1, 1) no (2, 1)
    // (3, 2) to (1, 3) no (2, -1)
    // (3, 2) to (2, 3) no (1, -1)
    // (3, 2) to (1, 2) no (2, 0)
    // (2, 2) to (3, 1) no (-1, 1)
    // (2, 2) to (1, 1) no (1, 1)
    // (2, 2) to (3, 3) no (-1, -1)
    // (2, 2) to (1, 3) no (1, -1)
    // (1, 1) to (1, 2) yes (0, -1)
    // (1, 1) to (2, 1) yes (-1, 0)
    // (1, 1) to (2, 3) no (-1, 2)
    // Yes: (1, 0) or (0, 1) or (-1, 0) or (0, -1)
    // No: (1, -1) or (-1, 1) or (2, 0) or (-1, 2)
    // No if > 1 or (0, 0) or (1, 1)
  }

  moveSquare(event)
  {
    var gameStatus = this.state.finishedGame
    var squares = this.state.squares
    var indexOfSquare = _.findIndex(squares, { value:event.target.textContent })
    var numSquare = squares[indexOfSquare]
    var indexOfBlankSquare = _.findIndex(squares, { value:'empty' })
    var blankSquare = squares[indexOfBlankSquare]

    if (checkGameStatus(squares, gameStatus))
    {
      console.log('Nice work, you won the game!');
    }
    else
    {
      this.checkMove(numSquare, indexOfSquare, blankSquare, indexOfBlankSquare)

      if (numSquare.validMove === true)
      {
        squares = squares.swapItems(squares, indexOfSquare, indexOfBlankSquare)
        this.setState({ squares: squares })
      }
      else
      {
        console.log("Can't move there!");
      }
    }
  }

  render()
  {
    const { squares } = this.state

    return (
      <div className="board-container">
        <Square onClick={this.moveSquare} value={squares[0].value} />
        <Square onClick={this.moveSquare} value={squares[1].value} />
        <Square onClick={this.moveSquare} value={squares[2].value} />
        <Square onClick={this.moveSquare} value={squares[3].value} />
        <Square onClick={this.moveSquare} value={squares[4].value} />
        <Square onClick={this.moveSquare} value={squares[5].value} />
        <Square onClick={this.moveSquare} value={squares[6].value} />
        <Square onClick={this.moveSquare} value={squares[7].value} />
        <Square onClick={this.moveSquare} value={squares[8].value} />
      </div>
    )
  }
}