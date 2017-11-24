import React from 'react'
// import Tile from './Tile'

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tiles: [
            {
              display: '1'  
            },
            {
              display: '2'  
            },
            {
              display: '3'  
            },
            {
              display: '4'  
            },
            {
              display: '5'  
            },
            {
              display: '6'  
            },
            {
              display: '7'  
            },
            {
              display: '8'  
            },
            {
              display: 'blank'  
            }]
        }
    }

    render() {
        return (
            <div>
              <p> board goes here </p>
            </div>
        )
    }
} 