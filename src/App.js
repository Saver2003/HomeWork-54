import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

const suits = ['H', 'C', 'D', 'S'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

class App extends Component {
    state = {
        cards: []
    };

    getCards = () => {
        const deck = [];
        for (let s = 0; s < suits.length; s++) {
            for (let r = 0; r < ranks.length; r++) {
                let card = {suit: suits[s], rank: ranks[r]};
                deck.push(card);
            }
        }

        const cards = [];

        for (let c = 0; c < 5; c++) {
            let randomCardIndex = Math.floor(Math.random() * deck.length);
            let [randomCard] = deck.splice(randomCardIndex, 1);
            cards.push(randomCard)
        }

        

        this.setState({cards});

    };

  render() {
    return (
      <div className="App playingCards faceImages">
          <div><button onClick={this.getCards}>Get Cards</button></div>
          <ul className="table">
              {
                  this.state.cards.map((card, index) =>{
                     return (
                         <li key={index}>
                            <Card suit={card.suit} rank={card.rank}/>
                         </li>
                     )
                  })
              }
          </ul>
      </div>
    );
  }
}

export default App;
