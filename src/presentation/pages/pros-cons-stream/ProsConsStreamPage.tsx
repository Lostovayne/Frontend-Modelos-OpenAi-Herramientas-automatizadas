import { useRef, useState } from "react";
import { prosConsStreamGeneratorUseCase } from "../../../core/use-cases";
import { GptMessage, MyMessage, TextMessageBox, TypingLoader } from "../../components";

interface Message {
  text: string;
  isGpt: boolean;
}

export const ProsConsStreamPage = () => {
  //Abortar la peticion si se escribe en el input
  const abortController = useRef(new AbortController());
  const isRunning = useRef(false);

  const [isloading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    // Lo mando a llamar si llega otro texto en el input para cancelar la peticion anterior

    if (isRunning.current) {
      abortController.current.abort();
      abortController.current = new AbortController();
    }

    setIsLoading(true);
    isRunning.current = true;
    setMessages([...messages, { text, isGpt: false }]);

    const stream = prosConsStreamGeneratorUseCase(text, abortController.current.signal);
    setIsLoading(false); // => quitar el cargando
    setMessages((messages) => [...messages, { text: "", isGpt: true }]);

    for await (const text of stream) {
      setMessages((messages) => {
        const newMessages = [...messages];
        newMessages[newMessages.length - 1].text = text;
        return newMessages;
      });
    }

    isRunning.current = false;
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2 ">
          <GptMessage text="¿Qué deseas comparar hoy?" />

          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text={message.text} />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}

          {isloading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader className="fade-in" />
            </div>
          )}
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe tu mensaje..."
        disableCorrection
      />
    </div>
  );
};
