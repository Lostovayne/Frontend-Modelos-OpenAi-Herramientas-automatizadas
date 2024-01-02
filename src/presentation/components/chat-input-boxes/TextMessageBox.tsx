import { useState } from "react";
interface Props {
    onSendMessage: (message: string) => void;
    placeholder?: string;
    disableCorrection?: boolean;
}

export const TextMessageBox = ({
    onSendMessage,
    placeholder,
    disableCorrection = false,
}: Props) => {
    const [message, setMessage] = useState<string>("");

    const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (message.trim().length === 0) return;
        onSendMessage(message);
        setMessage("");
    };

    return (
        <form
            action=""
            onSubmit={handleSendMessage}
            className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
        >
            <div className="flex-grow">
                <div className="relative w-full">
                    <input
                        type="text"
                        name="message"
                        className="w-full ring text-gray-800 rounded-xl bg-white focus:outline-none px-4 focus:ring-indigo-300 pl-4 h-10"
                        placeholder={placeholder}
                        autoComplete={disableCorrection ? "off" : "on"}
                        autoCorrect={disableCorrection ? "off" : "on"}
                        spellCheck={disableCorrection ? "false" : "true"}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
            </div>

            <div className="ml-4 ">
                <button className="btn-primary">
                    <span className="mr-2">Enviar</span>
                    <i className="fa fa-paper-plane"></i>
                </button>
            </div>
        </form>
    );
};
