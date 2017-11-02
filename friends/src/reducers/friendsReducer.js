import { GET_FRIENDS, ADD_FRIEND } from '../actions';

export default (friends = [], action) => {
    switch(action.type) {

        case GET_FRIENDS:
            return action.payload.data;
        case ADD_FRIEND: 
            return action.payload.data;
        default:
            return friends;
    }

}