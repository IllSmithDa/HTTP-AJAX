import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/addFriendForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AddFriendForm />
        <FriendsList />
      
      </div>
    );
  }
}

export default App;
