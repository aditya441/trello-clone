import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import '../App.css'

export default function board(props) {
    var boardBackground = {
        backgroundImage: 'url('+props.board.prefs.backgroundImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBottomColor: props.board.prefs.backgroundBottomColor
      };
      
  return (
      <Link to={'/b/'+props.board.id}>
          <div className="boardList" key={props.board.id} style={boardBackground}>
              <div className="name-board" >
                    <h5><b>{props.board.name}</b></h5> 
              </div>
          </div>
         </Link>
  );

}
