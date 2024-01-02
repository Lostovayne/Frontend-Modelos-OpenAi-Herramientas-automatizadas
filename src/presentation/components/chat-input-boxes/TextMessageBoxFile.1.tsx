import { useRef, useState } from "react";
interface Props {
    onSendMessage: (message: string) => void;
    placeholder?: string;
    disableCorrection?: boolean;
    accept?: string;
}

export const TextMessageBoxFile = ({
    onSendMessage,
    placeholder,
    disableCorrection = false,
    accept,
}: Props) => {
    const [message, setMessage] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

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
            <div className="mr-3 ">
                <button
                    type="button"
                    className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                    onClick={() => inputFileRef.current?.click()}
                >
                    <i className="fa fa-solid fa-paperclip text-xl"></i>
                </button>
                <input
                    type="file"
                    ref={inputFileRef}
                    accept={accept}
                    onChange={(e) => setSelectedFile(e.target.files?.item(0) ?? null)}
                    hidden
                />
            </div>
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
                <button className="btn-primary" disabled={!selectedFile}>
                    {!selectedFile ? (
                        <span className="mr-2">Enviar</span>
                    ) : (
                        <span className="mr-2">{selectedFile.name.substring(0, 7) + "..."}</span>
                    )}

                    <i className="fa fa-paper-plane"></i>
                </button>
            </div>
        </form>
    );
};
