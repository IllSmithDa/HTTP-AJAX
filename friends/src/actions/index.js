import axios from 'axios';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = "ADD_FRIEND";

export const getFriends  = () => {
    const friendsEndPoint = 'http://localhost:5000/friends';
    const friends = axios.get(friendsEndPoint);

    return{
        type: GET_FRIENDS,
        payload: friends
    }
}

export const addFriend = (friend) => {    
    const friendsEndPoint = 'http://localhost:5000/new-friend';
    const postFriend = axios.post(friendsEndPoint, friend );
    
    return{
        type: ADD_FRIEND,
        payload: postFriend
    }
}