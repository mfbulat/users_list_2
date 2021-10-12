import React, {FormEvent, useState} from 'react'
import style from './MessageForm.module.css'
import TextField from '@mui/material/TextField'
import Button from '@material-ui/core/Button'

type MessageFormPropsType = {
    sendMessage: (message: string) => void
}

const MessageForm = (props: MessageFormPropsType) => {
    const {sendMessage} = props
    const [message, setMessage] = useState<string>('')

    const handleSubmit = (event: FormEvent<HTMLFormElement> | React.KeyboardEvent) => {
        message != '' && sendMessage(message)
        event.preventDefault()
        setMessage('')
    }

    return (
        <form action="" className={style.dialogForm} onSubmit={handleSubmit}>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={1}
                variant={'outlined'}
                sx={{width: '100%'}}
                size={'small'}
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
            />
            <Button className={style.sendButton} size={'small'}
                    variant="contained" color={'primary'}
                    type={'submit'}
            >send</Button>
        </form>
    );
}

export default MessageForm;