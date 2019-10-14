import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {followAC, unfollowAC, setUsersAC} from '../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        Users: state.usersPage.Users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (Users) => {
            dispatch(setUsersAC(Users));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);