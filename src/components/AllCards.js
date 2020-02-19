import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class AllCards extends Component {
    render() {
        return (
            <div className="card-in-lists">
                  <div className="card-name">
                       <Link to={'/b/'+this.props.card.idBoard+'/c/'+this.props.card.id}> 
                       <p>{this.props.card.name}</p>
                       </Link>
                       <span className="fa fa-times delete-button" title="Remove Item" onClick={this.props.deleteCard}></span>
                  </div>

            </div>
        )
    }
}

export default AllCards
