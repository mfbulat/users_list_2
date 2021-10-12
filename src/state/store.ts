import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {authReducer} from './auth-reducer'
import {usersReducer} from './users-reducer'
import {dialogsReducer} from './dialogs-reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    dialogs: dialogsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

//это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
