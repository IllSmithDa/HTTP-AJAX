import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, getFriends } from '../actions';

class AddFriendForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newFriend: '',
            newAge: '',
            newEmail: ''
        };
        this.addFriend = this.addFriend.bind(this);
        this.updateNewFriend = this.updateNewFriend.bind(this);
        this.updateNewAge = this.updateNewAge.bind(this);
        this.updateNewEmail = this.updateNewEmail.bind(this);
    }

    addFriend(event) {
        event.preventDefault();
        this.props.addFriend({
            name: this.state.newFriend,
            Age: this.state.newAge,
            Email: this.state.newEmail
        });
        this.setState({
            newFriend: '',
            newAge: '',
            newEmail: ''
        });
    }

    updateNewFriend(event) {
        this.setState({
            newFriend: event.target.value,
        });
    }
    updateNewAge(event) {
        this.setState({
            newAge: event.target.value,
        });
    }
    updateNewEmail(event) {
        this.setState({
            newEmail: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form >
                    <input
                     onChange = {this.updateNewFriend}
                     placeholder = "new friend"
                     value = {this.state.newFriend}
                    /> 
                    <input
                     onChange = {this.updateNewAge}
                     placeholder = "new age"
                     value = {this.state.newAge}
                    /> 
                    <input
                     onChange = {this.updateNewEmail}
                     placeholder = "new email"
                     value = {this.state.newEmail}
                    /> 
                    <button onClick = {this.addFriend}> Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addFriend, getFriends })(AddFriendForm);