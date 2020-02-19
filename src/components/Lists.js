import React, { Component } from 'react'
import '../App.css'
import Card from './Card'

export class Lists extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : props.boardList.id,
            name : props.boardList.name,    
        }
    }
        handleChange=(event)=>{
            this.setState({name: event.target.value});
        }
      handleClick=(event)=> {
        let key= "ede8a76fec0679aa3ec899e5dbd991a6";
        let token = "d29d5d9b8eb84af66d5d32ea8ae3a0cb660e6cc93ae3a2c34cd2d68f3f0d89cb";
        if (event.key === "Enter") {
            return fetch(`https://api.trello.com/1/lists/${this.state.id}?name=${this.state.name}&key=${key}&token=${token}`,{
                method:'put'
            })
        
        }
      }
    
    render() {
        return (
            <div className="list">
                <div className="list-title">
                    <input type="text" className="form-control list-name" onChange={this.handleChange} onKeyUp={this.handleClick} name="listName" value={this.state.name} />
                    <span className="fa fa-times delete-button" title="Remove Item" onClick={this.props.deleteList}></span>
                </div>
                <div className="cards-in-list">
                    <Card listId={this.state.id}/>
                </div>
            </div>
        )
    }
}

export default Lists
