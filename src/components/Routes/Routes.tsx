import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Chat from '../Chat/Chat'
import Home from '../Home/Home'

export const PATH = {
    LOGIN: '/login',
    PROFILE: '/profile',
    HOME: '/home',
    CHAT: '/chat',
}

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} render={() => <Login/>} />
                <Route exact path={PATH.PROFILE} render={() => <Profile/>} />
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.CHAT} render={() => <Chat/>}/>
                <Route path={PATH.HOME} render={() => <Home/>}/>
            </Switch>
        </div>
    );
};

export default Routes;
