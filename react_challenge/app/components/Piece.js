import React from 'react'


export default function Piece(props) {
  return <p onClick={props.onClick} className={'piece' + props.value} >{props.value}
  </p>
} 