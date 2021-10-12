import avatar1 from '../assets/images/beard.png'
import avatar2 from '../assets/images/free-icon-avatar-147144.png'
import avatar3 from '../assets/images/gamer.png'
import avatar4 from '../assets/images/man.png'

const initialState = [
    {
        id: 1,
        name: 'Viktor',
        lastName: 'Ivanovich',
        avatar: avatar1,
        isLoggedIn: false,
    },
    {
        id: 2,
        name: 'Donald',
        lastName: 'Trump',
        avatar: avatar2,
        isLoggedIn: true,
    },
    {
        id: 3,
        name: 'Jeff',
        lastName: 'Bezos',
        avatar: avatar3,
        isLoggedIn: true,
    },
    {
        id: 4,
        name: 'Elon',
        lastName: 'Musk',
        avatar: avatar4,
        isLoggedIn: false,
    },
]

export type UsersType = typeof initialState

export const usersReducer = (state: UsersType = initialState, action: ActionsType): UsersType => {
    switch (action.type) {

        default:
            return state
    }
}

// types
type ActionsType = any
