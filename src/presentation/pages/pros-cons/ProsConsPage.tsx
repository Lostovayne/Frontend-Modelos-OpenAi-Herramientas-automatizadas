import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TypingLoader,
  TextMessageBox,
} from "../../components";
import { prosConsUseCase } from "../../../core/use-cases/pros-cons.use-case";

interface Message {
  text: string;
  isGpt: boolean;
}

export const ProsConsPage = () => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [messages, setmessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setmessages([...messages, { text, isGpt: false }]);
    // TODO: UseCase
    const { ok, content } = await prosConsUseCase(text);

    setIsLoading(false);

    if (!ok) return;

    //Agregar el mensaje
    setmessages((prev) => [...prev, { text: content!, isGpt: true }]);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2 ">
          <GptMessage text="¡Hola! Soy ChatGPT,estoy para ayudarte " />

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
