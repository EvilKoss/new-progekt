import { callbackify } from "util";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';

let initialState = {
        Users:[]
    };

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                Users: state.Users.map( u => { 
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
            })
        }

        case UNFOLLOW:
            return {
                ...state,
                Users: state.Users.map( u => { 
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
            })
        }

        case SET_USERS:{
            return { ...state, Users: [...state.Users, ...action.Users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) =>  ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (Users) => ({ type: SET_USERS, Users })


export default usersReducer;