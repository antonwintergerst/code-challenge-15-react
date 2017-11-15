import React from 'react'

export default function Square(props)
{
  var squareClass = ""
  var valueOfSquare = props.value
  if (valueOfSquare === "empty")
  {
    squareClass = "empty square"
  }
  else
  {
    squareClass = "square"
  }

  return (
    <div onClick={props.onClick} className={squareClass}>{props.value}</div>
  )
}