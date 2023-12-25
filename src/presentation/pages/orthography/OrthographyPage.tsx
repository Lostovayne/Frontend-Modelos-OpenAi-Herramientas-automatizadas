import { GptMessage, MyMessage, TypingLoader } from "../../components";

export const OrthographyPage = () => {
    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="grid grid-cols-12 gap-y-2 ">
                    <GptMessage text="¡Hola! Soy ChatGPT, un asistente de inteligencia artificial diseñado para ayudarte en tus correcciones de texto. Si necesitas pulir tu escritura, corregir gramática o simplemente mejorar la claridad de tus textos, ¡estoy aquí para ayudarte! Solo tienes que proporcionarme el texto que deseas corregir y estaré encantado de ayudarte a hacerlo más claro y conciso. ¿En qué puedo ayudarte hoy?" />

                    <MyMessage text="Hola,¿Como puedo aprender 10 cursos de 20 horas en un día?" />

                    <TypingLoader className="fade-in" />
                </div>
            </div>
        </div>
    );
};
