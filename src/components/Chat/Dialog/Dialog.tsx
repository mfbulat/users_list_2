import React from 'react'
import style from './Dialog.module.css'
import {MessageType} from '../../../state/dialogs-reducer'
import {UserType} from '../../../state/auth-reducer'

type DialogPropsType = {
    dialog: MessageType[]
    auth: UserType
}


const Dialog = (props: DialogPropsType) => {
    const {dialog, auth} = props

    return (
        <div className={style.messagesContainer}>
            {dialog.map((m, key) => {
                return (
                    <div
                        className={style.messageContainer} key={key}
                        style={{justifyContent: m.userId === auth.id ? 'flex-end' : 'flex-start'}}
                    >
                        <div className={m.userId === auth.id
                            ? `${style.message}  ${style.messageRight}`
                            : `${style.message}  ${style.messageLeft}`}>
                            <span>{m.message}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Dialog;
