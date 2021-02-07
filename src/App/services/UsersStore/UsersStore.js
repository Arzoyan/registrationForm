import RegistrationActions from "../../pages/RegistrationForm/actionTypes";


const intState = {
    allUsers: []
}

const UsersStore = (state = intState, { type, payload }) => {

    switch (type) {
        case RegistrationActions.REGISTRATION_USER_SUCCESS: {
            return {
                ...state,
                allUsers: [...state.allUsers, payload]
            }
        }
        default:
            return state
    }
}

export default UsersStore