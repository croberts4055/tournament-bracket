import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {

    // const propsList = [];
    // for(let propertyName in this.state.users){
    //   let i = 0;
    //   propsList.push(<li key={i}>{propertyName}</li>);
    //   i ++;
    // }

    return (
      <div className="App">
        <h1>Accounts</h1>
        <div>
          {this.state.users.map(function(user,i){
            return <p key={i}> {user.email} </p>
          })}
         </div> 
       
      </div>
    );
  }
}

export default App;