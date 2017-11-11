import React from 'react'
import Piece from './Piece'
import _ from 'underscore'
import swapArrayElements from '../../lib/swapArrayElements'


export default class Board extends React.Component {

  constructor(props) {
    super(props)
    this.attemptMove = this.attemptMove.bind(this)
    this.setCanMove = this.setCanMove.bind(this)
    this.randomizePieces = this.randomizePieces.bind(this)
    this.checkWin = this.checkWin.bind(this)
    this.state = { 
      pieces: [
      {
        value: '1',
        canMove: true
      },
      {
        value: '2',
        canMove: true
      },
      {
        value: '3',
        canMove: true
      },
      {
        value: '4',
        canMove: true
      },
      {
        value: '5',
        canMove: true
      },
      {
        value: '6',
        canMove: true
      },
      {
        value: '7',
        canMove: true
      },
      {
        value: '8',
        canMove: true
      },
      {
        value: 'blank',
        canMove: true
      }]
    }
  }


  setCanMove() {
    var pieces = this.state.pieces
    pieces.forEach(function(piece) {
      piece.canMove = false
    })
    var indexOfBlank = pieces.findIndex(function(piece) {
      return piece.value === 'blank'
    })
    if (indexOfBlank === 0) {
      pieces[1].canMove = true
      pieces[3].canMove = true
    } else if (indexOfBlank === 1) {
      pieces[0].canMove = true
      pieces[2].canMove = true
      pieces[4].canMove = true
    } else if (indexOfBlank === 2) {
      pieces[1].canMove = true
      pieces[5].canMove = true
    } else if (indexOfBlank === 3) {
      pieces[0].canMove = true
      pieces[4].canMove = true
      pieces[6].canMove = true
    } else if (indexOfBlank === 4) {
      pieces[1].canMove = true
      pieces[3].canMove = true
      pieces[5].canMove = true
      pieces[7].canMove = true
    } else if (indexOfBlank === 5) {
      pieces[2].canMove = true
      pieces[4].canMove = true
      pieces[8].canMove = true
    } else if (indexOfBlank === 6) {
      pieces[3].canMove = true
      pieces[7].canMove = true
    } else if (indexOfBlank === 7) {
      pieces[4].canMove = true
      pieces[6].canMove = true
      pieces[8].canMove = true
    } else if (indexOfBlank === 8) {
      pieces[5].canMove = true
      pieces[7].canMove = true
    }
    this.setState({pieces: pieces})
  }

  randomizePieces() {
    var pieces = this.state.pieces
    pieces = _.shuffle(pieces)
    this.setState({pieces: pieces})
  }

  componentWillMount() {
    this.randomizePieces()
  }


  componentDidMount() {
    this.setCanMove()
  }

  attemptMove(event) {
    var pieces = this.state.pieces
    var indexOfPieceToMove = pieces.findIndex(function(piece) {
      return piece.value === event.target.textContent
    })
    var indexOfBlank = pieces.findIndex(function(piece) {
      return piece.value === 'blank'
    })
    if (pieces[indexOfPieceToMove].canMove === true) {
      pieces = swapArrayElements(pieces, indexOfPieceToMove, indexOfBlank)
      this.setState({pieces: pieces})
      this.setCanMove()
      this.checkWin()
    } else {
      console.log('Sorry that move is impossible')
    }   
  }

  checkWin() {
    var pieces = this.state.pieces
    var score = 0
    pieces.forEach(function(piece, index) {
      if ((Number(piece.value) - 1) === index) {
        score++
      }
    })
    if (score >= 8) {
      console.log('winner!')
    }
  }


  render() {
    return <div className='board'>
      <Piece onClick={this.attemptMove} value={this.state.pieces[0].value} />
      <Piece onClick={this.attemptMove} value={this.state.pieces[1].value} />
      <Piece onClick={this.attemptMove} value={this.state.pieces[2].value} />
      <Piece onClick={this.attemptMove} value={this.state.pieces[3].value} />
      <Piece onClick={this.attemptMove} value={this.state.pieces[4].value} />
      <Piece onClick={this.attemptMove} value={this.state.pieces[5].value} />
      <Piece onClick={this.attemptMove} value={this.state.pieces[6].value} />
      <Piece onClick={this.attemptMove} value={this.state.pieces[7].value} />
      <Piece onClick={this.attemptMove} value={this.state.pieces[8].value} /> 
    </div>
  }

}
