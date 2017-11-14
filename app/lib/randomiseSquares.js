import _ from 'underscore'

export default function randomiseSquares(squares)
{
  var squaresArray = _.shuffle(['1','2','3','4','5','6','7','8','empty'])

  for (var count = 0; count < squaresArray.length; count++)
  {
   squares[count].value = squaresArray[count]
  }
}