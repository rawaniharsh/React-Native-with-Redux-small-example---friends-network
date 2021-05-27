import { combineReducers } from 'redux';

const INITIAL_STATE = {
    current: [],
    possible: [
        'Harsh',
        'Yash',
        'Piyush',
        'Ayush'
    ],
};

const friendsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FRIEND':
            const {
                current,
                possible,
            } = state;
            const addedFriend = possible.splice(action.payload, 1);

            current.push(addedFriend);

            // Finally, update the redux state
            const newState = { current, possible };

            return newState;

        default:
            return state
    }
};

export default combineReducers({
    friends: friendsReducer
});