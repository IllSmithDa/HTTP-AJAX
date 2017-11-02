import { GET_FRIENDS, ADD_FRIEND } from '../actions';

export default (friends = [], action) => {
    switch(action.type) {

        case GET_FRIENDS:
            return action.payload.data;
        case ADD_FRIEND: 
            friends.push(action.payload);
            console.log(friends)
            return friends;
        default:
            return friends;
    }

}