import React, { Component } from 'react'
import Board from './board'
import '../App.css'

export class boards extends Component {
    constructor(props) {
        super(props);
        this.state = {
          boardList: [],
        };
      }
      componentDidMount() {
        this.getBoards();
      }
      async getBoards() {
        let key= "ede8a76fec0679aa3ec899e5dbd991a6";
        let token = "d29d5d9b8eb84af66d5d32ea8ae3a0cb660e6cc93ae3a2c34cd2d68f3f0d89cb";
        const boards = await fetch(`https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`);
        const boardsJson = await boards.json();
        console.log(boardsJson)
        this.setState({boardList:boardsJson})
      }    

    render() {
        return (
            <div>
                <div className="Board-heading">
                    <h1>Boards</h1>
                </div>
                <div className="all-boards">
                    {this.state.boardList.map((board) => {
                        return (
                            <Board board={board} key={board.id}/>
                        )
                    })} 
                </div>
            </div>
        )
    }
}

export default boards
