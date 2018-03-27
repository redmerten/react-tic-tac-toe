/**
 * Created by AndreaMerten on 3/22/18.
 */

import React, {Component} from 'react'
import Radium from 'radium'

class TicTacToe extends Component{

  state={
    board:[
      0,1,2,
      3,4,5,
      6,7,8
    ],
    computerValue:null,
    humanValue:null,
    humanTurn:null,
    start:false,
    winner:null,
    gameOver:false
  }

  shouldComponentUpdate(nextProps, nextState){
    //return (this.state._radiumStyleState === nextState._radiumStyleState)
    return true
  }


  componentDidUpdate(){
    console.log('state from componentDidUpdate',this.state)
    const {start, winner, humanTurn, humanValue, computerValue} = this.state
    if (start && !winner) {
      if (this.testForWin()){
        console.log('winner')
        this.setState({
          //opposite because turn changes before winner is checked
          winner:humanTurn ? computerValue : humanValue,
        })
      }
      else
        if (!humanTurn) {
          this.computerPlay()
      }
    }
  }

  testForWin=()=>{
    const {board} = this.state
      if (
        (board[0] === board[1] && board[1] === board[2]) ||
        (board[3] === board[4] && board[4] === board[5]) ||
        (board[6] === board[7] && board[7] === board[8]) ||
        (board[0] === board[3] && board[3] === board[6]) ||
        (board[1] === board[4] && board[4] === board[7]) ||
        (board[2] === board[5] && board[5] === board[8]) ||
        (board[0] === board[4] && board[4] === board[8]) ||
        (board[2] === board[4] && board[4] === board[6])
      )
        return true
    }

  chooseShape=(shape)=>{
    if (!this.state.start) {
      this.setState({
        humanValue: shape,
        computerValue: shape === 'X' ? 'O' : 'X',
        start: true,
        humanTurn: shape === 'X' ? true : false
      })
    }
  }

  selectShape=()=>{
    return(
      <div style={styles.shapeDiv}>
        <h2>To Start Play, Select Your Shape</h2>
        <div style={styles.xoDiv}>
          <button
            style={styles.shapeButton}
            onClick={()=>this.chooseShape('X')}
            key="x"
          >
            X
          </button>
          <button
            style={styles.shapeButton}
            onClick={()=>this.chooseShape('O')}
            key="o"
          >
            O
          </button>
        </div>
      </div>
    )
  }

  buttonClick=(i)=>{
    const {board, humanValue, computerValue, winner} = this.state
    if (!winner) {
      if (!computerValue){
        alert('Please select a shape')
      }
      else {
        if (isNaN(board[i])) {
          alert("this square is not available")
        }
        else {
          let newArr = board.slice()  //deepcopy
          newArr.splice(i, 1, humanValue)
          this.setState({board: newArr,humanTurn:false})
        }
      }
    }
  }

  renderBoard=()=>{
    return(
      <div style={styles.boardDiv}>
        {this.state.board.map((s,i)=>
          <div style={styles.squaresDiv} key={i}>
            <button
              onClick={()=>this.buttonClick(i)}
              style={styles.button} key={i}>
              {isNaN(s) ? s : ''}
            </button>
          </div>
        )}
      </div>
    )
  }

  computerPlay=()=>{
    //just random play
    console.log('computer turn')
    this.setState({humanTurn:true})

    setTimeout(()=>{
      const {computerValue, board } = this.state
      let all = board.filter(e=>!isNaN(e))
      let i = Math.floor(Math.random() * all.length)//board.findIndex(e=> !isNaN(e))
      console.log('selection',i, all)
      let newArr = board.slice()  //deepcopy
      newArr.splice(all[i], 1, computerValue)
      this.setState({board: newArr})
      console.log('computerArr', newArr)
    },500)

  }

  render(){
    console.log('state', this.state)
    console.log('window', window.location)
    let {humanValue, computerValue, start, winner, humanTurn, gameOver} = this.state
    return(
      <div style={styles.gameDiv}>
        <h2>Welcome to Tic Tac Toe</h2>
        {!start ? this.selectShape() : <div/>}

        {start && !winner?
          <div>
            <p>You are {humanValue} </p>
            <p>Computer is {computerValue}</p>
            <p>{humanValue === 'X' ? 'You Start' : `The Computer Starts`}</p>
          </div>
          : winner ?
            <h1>The winner is {humanTurn ? computerValue : humanValue}</h1>
            :<div/>
        }
        {this.renderBoard()}

     </div>
    )
  }
}

export default Radium(TicTacToe)

const styles={
  gameDiv:{
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    margin:'2%'
  },
  boardDiv:{
    height:'650px',
    width:'650px',
    display:'flex',
    flexWrap:'wrap',
  },
  squaresDiv:{
    height:'200px',
    width:'200px',
    //border:'1px solid black',
    backgroundColor: '#b3aad3',
    margin:'1%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  },
  button:{
    height:'200px',
    width:'200px',
    border:'none',
    fontSize:'500%',
    color:'white',
    backgroundColor: '#b3aad3',
    ':hover': {
      backgroundColor: '#D2C8F8',
    }
  },
  shapeDiv:{
    margin:'1%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: '50vw'
  },
  xoDiv:{
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    width: '20vw'
  },
  shapeButton:{
    height:'50px',
    width:'50px',
    fontSize:'200%',
    border:'none',
    color:'#4B477C',
    backgroundColor:'#b3aad3',
    borderRadius:'50%',
    margin:'1% 5%',
    ':hover': {
      backgroundColor: '#D2C8F8',
    }
  }
}