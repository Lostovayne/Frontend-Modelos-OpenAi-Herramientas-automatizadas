import Markdown from "react-markdown";

interface Props {
  text: string;
}

export const GptMessage = ({ text }: Props) => {
  return (
    <div className="col-start-1 col-end-9 p-5 rounded-lg ">
      <div className="flex flex-row items-center ">
        <div className="flex  items-center justify-center size-10 rounded-full bg-green-600 flex-shrink-0">
          G
        </div>
        <div className="relative ml-3 text-sm 2xl:text-base font-normal text-wrap  bg-black bg-opacity-25 pt-4 pb-2 px-5 shadow rounded-xl antialiased">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  );
};
