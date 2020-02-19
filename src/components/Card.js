import React, { Component } from 'react'
import '../App.css'
import AllCards from './AllCards'

export class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards:[],
            listId:this.props.listId,
            value:'',
            key:"ede8a76fec0679aa3ec899e5dbd991a6",
            token:"d29d5d9b8eb84af66d5d32ea8ae3a0cb660e6cc93ae3a2c34cd2d68f3f0d89cb"
        }
        this.createCard = this.createCard.bind(this)
    }
    componentDidMount(){
        this.getCards()
    }
    async getCards(){
        let cards = await fetch(`https://api.trello.com/1/lists/${this.state.listId}/cards?key=${this.state.key}&token=${this.state.token}`)
        let cardsJson = await cards.json();
        this.setState({cards:cardsJson})
    }
    async createCard(event) {
        if(event.key==="Enter"){
            let cardName = event.target.value
            let newCard = await fetch(`https://api.trello.com/1/cards?name=${cardName}&pos=top&idList=${this.state.listId}&keepFromSource=all&key=${this.state.key}&token=${this.state.token}`,{
                method:'post'
             })
             let newCardJson = await newCard.json();
             this.state.cards.push(newCardJson);
             this.setState({cards:this.state.cards})
        }
    }
    async deletecard(id) {
        let delCard = await  fetch(`https://api.trello.com/1/cards/${id}?key=${this.state.key}&token=${this.state.token}`,{
            method:'delete'
        })
        let newCards = this.state.cards.filter((card) => card.id != id);
        this.setState({cards:newCards})
    
    }
    render() {
        console.log(this.state.cards)
        return (
            <React.Fragment>
            <div className="inputbox">
            <input className="form-control card-name"  type="text" onKeyPress={this.createCard}  value={this.state.Value}
             placeholder="Enter a title for this card..."/>
          </div>
          <div className="all-cards">
              {this.state.cards.map((card) => {
                  return (
                      <AllCards card={card} key={card.id} deleteCard={this.deletecard.bind(this,card.id)} />
                  )
              })}
          </div>
          </React.Fragment>
    
        )
    }
}

export default Card
