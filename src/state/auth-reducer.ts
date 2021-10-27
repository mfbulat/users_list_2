import {FormikErrorType} from '../components/Login/Login'
import {Dispatch} from 'redux'

const initialState = {
    id: 10,
    isLoggedIn: false,
    userName: 'developer21',
    password: '123456',
    name: 'Ivan',
    lastName: 'Ivanovich',
    photo: 'http://i.imgur.com/alxnAjw.jpg',
    aboutMe: 'He trains himself physically and intellectually, crafts a bat-inspired persona, and monitors the Gotham streets at night. Kane, Finger, and other creators accompanied Batman with supporting characters, including his sidekick Robin; allies Alfred Pennyworth, James Gordon, and Catwoman; and foes such as the Penguin, the Riddler, Two-Face, and his archenemy, the Joker.',
}
export type UserType = typeof initialState

export const authReducer = (state: UserType = initialState, action: ActionsType): UserType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

//thanks
export const setIsLoggedInTC = (values: FormikErrorType) => (dispatch: Dispatch) => {
    debugger
    if (values.login === initialState.userName && values.password === initialState.password) {
        dispatch(setIsLoggedInAC(true))
    } else {
        alert('error')
    }
}
// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>
