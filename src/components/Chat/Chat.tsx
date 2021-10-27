import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../state/store'
import {Redirect} from 'react-router-dom'
import {PATH} from '../Routes/Routes'
import style from './Chat.module.css'
import {UserType} from '../../state/auth-reducer'
import {UsersType} from '../../state/users-reducer'
import {DialogsType, MessageType, setMessageAC} from '../../state/dialogs-reducer'
import Users from '../Users/Users'
import MessageForm from './MessageForm/MessageForm'
import Dialog from './Dialog/Dialog'

const Chat = () => {
    const auth = useSelector<AppRootStateType, UserType>(state => state.auth)
    const usersList = useSelector<AppRootStateType, UsersType>(state => state.users)
    const initialDialogs = useSelector<AppRootStateType, DialogsType>(state => state.dialogs)

    const [dialog, setDialogs] = useState<MessageType[]>(initialDialogs[1])

    const [userId, setUserId] = useState<number>(1)

    const dispatch = useDispatch()

    useEffect(() => {
        setDialogs(initialDialogs[userId])
    }, [initialDialogs, userId])

    const onUserClick = (userId: number) => {
        setUserId(userId)
    }

    const sendMessage = (message: string) => {
        dispatch(setMessageAC(userId, message))
    }


    if (!auth.isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div className={style.chatContainer}>
            <Users usersList={usersList} onUserClick={onUserClick} clickedUserId={userId}/>
            <div className={style.dialogContainer}>
                <Dialog dialog={dialog} auth={auth}/>
                <MessageForm sendMessage={sendMessage}/>
            </div>
        </div>
    );
}

export default Chat;
