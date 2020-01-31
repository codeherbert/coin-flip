import React, {Component} from 'react';
import Coin from './Coin';
import { choice } from './helpers';
import './CoinFlipper.css';

class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: "tails", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/US_50_Cent_Rev.png/330px-US_50_Cent_Rev.png"}
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                numFlips: st.numFlips + 1,
                numHeads: st.numHeads + (newCoin.side === "heads" ? 1: 0),
                numTails: st.numTails + (newCoin.side === "tails" ? 1: 0)             
            };
        });
    }
    handleClick(e) {
        this.flipCoin();
    }
    render() {
        return (
            <div className="CoinFlipper">
                <h2>Let's flip a coin!!</h2>
                {this.state.currCoin  && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Flip me!</button>
                <p>
                    Out of <span>{this.state.numFlips}</span> flips, there have been <span>{ this.state.numHeads}</span>{" "} heads and
                    {" "}<span>{this.state.numTails}</span> tails.
                </p>
            </div>
        );
    }
}

export default CoinFlipper;