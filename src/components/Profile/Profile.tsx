import React from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../state/store'
import {Redirect} from 'react-router-dom'
import {PATH} from '../Routes/Routes'
import {Paper} from '@material-ui/core'
import {UserType} from '../../state/auth-reducer'
import style from './Profile.module.css'

const Profile = () => {
    const user = useSelector<AppRootStateType, UserType>(state => state.auth)

    if (!user.isLoggedIn){
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div className={style.profileContainer}>
            <Paper elevation={3} className={style.profileBlock}>
               <div className={style.photo}><img src={user.photo} alt={'user photo'}/></div>
               <div className={style.aboutMe}>
                   <h1>{`${user.name} ${user.lastName}`}</h1>
                   <p>{user.aboutMe}</p>
               </div>
            </Paper>
        </div>
    );
}

export default Profile;