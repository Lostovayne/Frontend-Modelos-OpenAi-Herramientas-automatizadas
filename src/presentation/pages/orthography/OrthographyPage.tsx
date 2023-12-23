import { GptMessage, MyMessage } from "../../components";

export const OrthographyPage = () => {
    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="grid grid-cols-12 gap-y-2 ">
                    <GptMessage text="¡Hola! Soy ChatGPT, un asistente de inteligencia artificial diseñado para ayudarte en tus correcciones de texto. Si necesitas pulir tu escritura, corregir gramática o simplemente mejorar la claridad de tus textos, ¡estoy aquí para ayudarte! Solo tienes que proporcionarme el texto que deseas corregir y estaré encantado de ayudarte a hacerlo más claro y conciso. ¿En qué puedo ayudarte hoy?" />

                    <MyMessage text="Hola, ¿en qué puedo ayudarte?" />
                </div>
            </div>
        </div>
    );
};
