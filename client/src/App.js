import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: [],
    email: "",
    username: "",
    password: "",
    type: ""
  }

  componentDidMount() {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  onSubmit(e) {

    fetch('http://localhost:3001/users',{
      method: "post",
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        email: "aaron@egf.com",
        username: "bigdaddy",
        password: "12345",
        type: "College",
        dob: "6/24/97"
      })
    })
    .then ((response) => response.json )
    .then ((response) =>{
      console.log("made it!");
  
    })
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
        <button onClick={this.onSubmit.bind(this)} value="Submit"/>
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