import React, { Component } from 'react'
import Boards from './components/boards.js'
import BoardList from './components/List'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
         <Router>
           <Route exact path="/">
             <Boards />
           </Route>
           <Route exact path="/b/:boardId" render = {props => (
             <React.Fragment>
             <BoardList {...props}/>
           </React.Fragment>
           )}>
           </Route>
         </Router>
      </div>
    )
  }
}

export default App
