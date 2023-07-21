import { useChat } from "@/contexts/ChatContext";
import { KeyboardEvent,useState } from "react";

type Props = {
    name: string
}

export const ChatInput = ({name}: Props) => {
    const [textInput, setTextInput] = useState ('');
    const chatCtx = useChat();

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter') {
            if(textInput.trim() !== "") {
                chatCtx?.addMessage(name, textInput.trim());
                setTextInput('');
            }
        }
    }
    return(
        <input
            className="w-full bg-transparent text-white text-md outline-none"
            placeholder={`${name}, escreva uma mensagem`}
            onChange={e => setTextInput(e.target.value)}
            onKeyUp={handleKeyUpAction}
        />
    )
}