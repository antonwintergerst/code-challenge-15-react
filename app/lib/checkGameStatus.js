export default function checkGameStatus(squares, gameStatus)
{
  var currentBoard = []
  const winCondition = ['1', '2', '3', '4', '5', '6', '7', '8', 'empty']
  squares.forEach(function(square)
  {
    currentBoard.push(square.value)
  })

  if (JSON.stringify(winCondition) === JSON.stringify(currentBoard))
  {
    gameStatus = true
    return gameStatus
  }
  else
  {
    gameStatus = false
    return gameStatus
  }
}