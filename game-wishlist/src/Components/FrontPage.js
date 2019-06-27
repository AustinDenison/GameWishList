import React, {Component} from 'react'
import axios from 'axios'
import Cards from './Cards';
import WishList from './WishList'


class FrontPage extends Component {
    constructor(){
        super()
        this.state = {
            games: [],
            wishlist: []
        }
    }

    componentDidMount(){
        axios.get('/api/games').then(res => {
          this.setState({games: res.data})
        })
      }

    addTo = (game) => {
       this.setState({
           wishlist: [...this.state.wishlist, game]
       })
    }

    delete = (game) => {
        let copy = this.state.wishlist.slice()
        let index = this.state.wishlist.findIndex(wlgame => game.id === wlgame.id)       
        copy.splice(index, 1)
        this.setState({
            wishlist: copy
        })
    }

    render(){
        return(
            <div>
                <h2 onClick={() => this.goToWishList()}>Wish List</h2>
                {this.state.wishlist.map(game => {
            console.log(this.state.wishlist)
                    return(
                        <WishList 
                        key={game.id}                      
                        game={game}
                        delete={this.delete}
                        />
                    )
                })}
                {this.state.games.map(game => {
                    return(
                        <Cards
                        key={game.id} 
                        game={game}
                        addTo={this.addTo}
                        />
                    )
                })}
            </div>
        )
    }
}

export default FrontPage