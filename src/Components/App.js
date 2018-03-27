
import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
//app will show all components

//import Navbar from './Navbar'
import TicTacToe from './TicTacToe'

class  App extends Component {

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/*<Navbar/>*/}
            <Route exact path='/' component={TicTacToe}/>

          </div>
        </BrowserRouter>
      </div>
    )
  }
}

//this is imported by main index.js
export default App


