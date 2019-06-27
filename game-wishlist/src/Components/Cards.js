import React, {Component} from 'react'
import './Cards.css'


class Cards extends Component {
    render(){
        return(
            <div className='cards'>
                <h2>{this.props.game.title}</h2>
                <img className='img' src={this.props.game.logo} alt='logo'/>
                <p>{this.props.game.info}</p>
                <button onClick={() => this.props.addTo(this.props.game)}>Add to Wish List</button>
            </div>
        )
    }
}

export default Cards