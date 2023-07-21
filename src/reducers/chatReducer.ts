import { Messages } from "@/types/Messages";


type addAction = {
    type: 'add'
    payload: {
        user: string;
        text: string;
    }
}


type ListActions = addAction;
export const chatReducer = (state: Messages[], action: ListActions ) => {

    switch(action.type) {
        case ('add'):
            return [...state, {
                id: state.length,
                text: action.payload.text,
                user: action.payload.user
            }];
        
        default:
            return state;
    }

}