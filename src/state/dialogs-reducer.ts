export type MessageType = {
    id: number
    userId: number
    message: string
}

const initialState: DialogsType = {
    [1]: [
        {id: 1, userId: 1, message: 'Hi, i am Viktor'},
        {id: 2, userId: 10, message: 'Hi'},
        {id: 3, userId: 1, message: 'How are you?'},
        {id: 4, userId: 10, message: 'Great!'},
    ],
    [2]: [
        {id: 1, userId: 1, message: 'Hi, i am Donald'},
        {id: 2, userId: 10, message: 'Hi'},
        {id: 3, userId: 1, message: 'How, are you?'},
        {id: 4, userId: 10, message: 'Great!'},
    ],
    [3]: [
        {id: 1, userId: 1, message: 'Hi, i am Jeff'},
        {id: 2, userId: 10, message: 'Hi'},
        {id: 3, userId: 1, message: 'How are you?'},
        {id: 4, userId: 10, message: 'Great!'},
    ],
    [4]: [
        {id: 1, userId: 1, message: 'Hi, i am Elon'},
        {id: 2, userId: 10, message: 'Hi'},
        {id: 3, userId: 1, message: 'How are you?'},
        {id: 4, userId: 10, message: 'Great!'},
    ],
}
export type DialogsType = {
    [key: number]: MessageType[]
}

export const dialogsReducer = (state: DialogsType = initialState, action: ActionsType): DialogsType => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return {...state, [action.dialogId]: [...state[action.dialogId], {id: 4, userId: 10, message: action.message}]}
        default:
            return state
    }
}
// actions
export const setMessageAC = (dialogId: number, message: string) =>
    ({type: 'SET_MESSAGE', dialogId, message} as const)

// types
type ActionsType = ReturnType<typeof setMessageAC>
