import React from 'react'
import Avatar from '@mui/material/Avatar'
import {Paper} from '@mui/material'
import style from './Users.module.css'
import {UsersType} from '../../state/users-reducer'

type UsersPropsType = {
    usersList: UsersType
    onUserClick: (e: number)=>void
}

const Users = (props: UsersPropsType) => {
    const {usersList, onUserClick} = props
    return (
        <div className={style.users}>
            {usersList.map((u, key) => {
                return <Paper elevation={3} className={style.chatBlock} key={key} onClick={() => onUserClick(u.id)}>
                    <Avatar
                        alt={`${u.name} ${u.lastName}`}
                        src={u.avatar}
                        sx={{width: 56, height: 56}}
                    />
                    <div className={style.text}>
                        <span>{`${u.name} ${u.lastName}`}</span>
                        {u.isLoggedIn
                            ? <span className={style.online}>online</span>
                            : <span className={style.offline}>offline</span>}
                    </div>
                </Paper>
            })}
        </div>
    );
}

export default Users;