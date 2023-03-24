// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="text">
          <input
            type="search"
            className="input"
            placeholder="Search"
            onChange={this.onChangeInputValue}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="imgUrl"
          />
        </div>
        <ul className="listData">
          {searchResult.map(eachPlace => (
            <DestinationItem destinationsList={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
