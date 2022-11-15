import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {userInput: '', userDetailsList: initialUserDetailsList}

  onChangeSearchInput = event => {
    this.setState({userInput: event.target.value})
  }

  DeleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredUserDeletelist = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )

    this.setState({userDetailsList: filteredUserDeletelist})
  }

  render() {
    const {userInput, userDetailsList} = this.state

    const searchResults = userDetailsList.filter(each =>
      each.name.includes(userInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={userInput}
        />

        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              onDeleteUser={this.DeleteUser}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
