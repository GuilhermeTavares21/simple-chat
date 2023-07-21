import { chatReducer } from "@/reducers/chatReducer";
import { Messages } from "@/types/Messages";
import { ReactNode, createContext, useContext, useReducer } from "react";

type ChatContext = {
    chat: Messages[];
    addMessage: (user: string, text: string) => void;
}

export const ChatContext = createContext<ChatContext | null> (null)

export const ChatProvider = ({ children }: { children: ReactNode}) => {
    const [chat, dispatch] = useReducer(chatReducer, []);
    
    const addMessage = (user: string, text: string) => {
        dispatch({
            type: 'add',
            payload: {user, text}
        })
    }

    return(
        <ChatContext.Provider value= { {chat, addMessage} }>{children}</ChatContext.Provider>
    )
} 

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useChat = () => useContext(ChatContext);