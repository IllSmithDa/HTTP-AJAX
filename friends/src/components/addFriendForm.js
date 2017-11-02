import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, getFriends } from '../actions';

class AddFriendForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        };
        this.addFriend = this.addFriend.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
    }

    addFriend(event) {
        event.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };
            this.props.addFriend(newFriend);
        this.setState({
            name: '',
            age: '',
            email: '',
        });
    }

    updateName(event) {
        this.setState({
            name: event.target.value,
        });
    }
    updateAge(event) {
        this.setState({
            age: event.target.value,
        });
    }
    updateEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                onChange = {this.updateName}
                placeholder = "new friend"
                value = {this.state.name}
                /> 
                <input
                onChange = {this.updateAge}
                placeholder = "new age"
                value = {this.state.age}
                /> 
                <input
                onChange = {this.updateEmail}
                placeholder = "new email"
                value = {this.state.email}
                /> 
                <button onClick = {this.addFriend}> Submit</button>
                  
            </div>
        );
    }
}

export default connect(null, { addFriend, getFriends })(AddFriendForm);