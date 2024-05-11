import { useState } from "react";
import { GptMessage, TextMessageBox, TypingLoader } from "../../components";
import { MyMessage } from "../../components/chat-bubbles/MyMessage";
import { orthographyCheckUseCase } from "../../../core/use-cases";
import { GptOrthographyMessages } from "../../components/chat-bubbles/GptOrthographyMessages";

interface Message {
  text: string;
  isGpt: boolean;
  info?: {
    userScore: number;
    errors: string[];
    message: string;
  };
}

export const OrthographyPage = () => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [messages, setmessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setmessages([...messages, { text, isGpt: false }]);

    const { ok, userScore, errors, message } = await orthographyCheckUseCase(text);

    console.log({errors})

    if (!ok) {
      setmessages((prev) => [...prev, { text: "No se pudo realizar la corrección", isGpt: true }]);
    } else {
      setmessages((prev) => [...prev, { text: message, isGpt: true, info: { errors, userScore, message } }]);
    }

    //! añadir el mensaje de gpt en true
    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="gap-y-2 grid grid-cols-12">
          <GptMessage text="¡Hola! Soy ChatGPT, un asistente de inteligencia artificial diseñado para ayudarte en tus correcciones de texto." />

          {messages?.map((message, index) =>
            message.isGpt ? (
              <GptOrthographyMessages key={index} {...message.info!} />
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

      <TextMessageBox onSendMessage={handlePost} placeholder="Escribe tu mensaje..." disableCorrection />
    </div>
  );
};
