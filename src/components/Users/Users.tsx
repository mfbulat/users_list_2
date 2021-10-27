import React from 'react'
import Avatar from '@mui/material/Avatar'
import style from './Users.module.css'
import {UsersType} from '../../state/users-reducer'

type UsersPropsType = {
    usersList: UsersType
    onUserClick: (e: number) => void
    clickedUserId?: number
}

const Users = (props: UsersPropsType) => {
    const {usersList, onUserClick, clickedUserId} = props
    return (
        <div className={style.users}>
            {usersList.map((u, key) => {
                const userStyle = clickedUserId === u.id
                    ? `${style.clickedChatBlock} ${style.chatBlock}`
                    : style.chatBlock

                return (
                    <div
                        className={userStyle}
                        key={key}
                        onClick={() => onUserClick(u.id)}>
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
                    </div>
                )
            })}
        </div>
    );
}

export default Users;
