import React from 'react'
import {Redirect} from 'react-router-dom'
import {PATH} from '../Routes/Routes'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../state/store'
import Users from '../Users/Users'
import {UsersType} from '../../state/users-reducer'

const Home = () => {
    const isLogin = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const usersList = useSelector<AppRootStateType, UsersType>(state => state.users)
    const onlineUsers = usersList.filter(u => u.isLoggedIn)

    if (!isLogin) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div>
            <Users usersList={onlineUsers} onUserClick={()=>{}}/>
        </div>
    );
};

export default Home;