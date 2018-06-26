import React, { Component } from 'react';
import './App.css';

import Bracket from './components/Bracket';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalTeams: 0
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      totalTeams: event.target.value
    });
  }

  render() {
    return (
      <div className="app">
        <div className="form-get-all-teams">
          <form>
            <label>
              <h3>Enter Total Teams: </h3>
                <input type="number" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <Bracket totalRounds={this.state.totalTeams/2} teams={this.state.totalTeams}/>
        </div>
      </div>
    );
  }
}

/*
class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}
*/

export default App;