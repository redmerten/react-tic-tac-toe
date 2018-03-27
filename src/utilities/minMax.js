/**
 * Created by AndreaMerten on 3/22/18.
 */

let board = [
  'O',1 ,'X',
  'X', 4 ,'X',
  6 ,'O','O'
]

// human
let huPlayer = 'O'
let computer = 'X'

// returns list of the indexes of empty spots on the board
const emptySpots = (board) =>{
  return  board.filter(s => s != 'O' && s != 'X')
}

// winning combinations using the board indexies
const winning=(board, player)=>{
  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  )
    return true
  else
    return false
}

const addTurns = (board, player) =>{
  let options = emptySpots(board,player)
  //console.log(board.splice(1,1,player))
  let arr, level=[]
  options.forEach(e=>{
    arr=board.slice()
    console.log('arr',arr)
    arr.splice(e,1,player)
    console.log('splice', arr)
    level.push(arr)
  })
  console.log(level)
  return level
}
// the main minimax function
const miniMax = (newBoard)=>{
 console.log('what')
}

miniMax(board)
addTurns(board, huPlayer)
