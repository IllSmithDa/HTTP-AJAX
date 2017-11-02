import React from 'react' 
import { connect } from 'react-redux';

const UpdatedList = (props) => {
    return(
        <ul>
            {props.friends.map((friend) =>{
                return(
                    <p> {friend.name} </p>
                )
            })}
        </ul>
    );
}
const mapStateToProps = (state) => {
    return {
        friends: state.friends
    }
}
export default connect(mapStateToProps)(UpdatedList);