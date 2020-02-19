import React, { Component } from 'react'
import Lists from './Lists'
import '../App.css'

export class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            list : [],
            boardId:this.props.match.params.boardId,
             key:"ede8a76fec0679aa3ec899e5dbd991a6",
             token :"d29d5d9b8eb84af66d5d32ea8ae3a0cb660e6cc93ae3a2c34cd2d68f3f0d89cb"
        }
        this.createList = this.createList.bind(this)
    }
    componentDidMount(){
        this.getBoardlist();
    }
    async getBoardlist(){
        const list = await fetch(`https://api.trello.com/1/boards/${this.state.boardId}/lists?key=${this.state.key}&token=${this.state.token}`);
        const listJson = await list.json()
        this.setState({list:listJson})
    }
    async createList(event){
        if(event.key === "Enter"){
            let name=event.target.value;
            const list = await fetch(`https://api.trello.com/1/lists?name=${name}&idBoard=${this.state.boardId}&key=${this.state.key}&token=${this.state.token}`,{
                method:'post'
            }) 
            const listJson = await list.json();
            this.state.list.push(listJson)
            this.setState({list:this.state.list})  
        }
    }
    async deletelist(id){
        const list = await  fetch(`https://api.trello.com/1/lists/${id}/closed?value=true&key=${this.state.key}&token=${this.state.token}`,{
            method:'put'
        })
        const newList = this.state.list.filter((list)=> list.id != id);
        this.setState({list:newList})
    }
    render() {
        console.log(this.state.list)
        return (
            <div className="boardList">
                {this.state.list.map((li) => {
                   return(
                       <Lists boardList = {li} deleteList = {this.deletelist.bind(this,li.id)}/>
                   )
                })}
                <div className="create-list">
                    <input type="text" placeholder="+Add another list" className="form-control create-list-text" onKeyPress={this.createList}></input>
                </div>
            </div>
        )
    }
}

export default List
