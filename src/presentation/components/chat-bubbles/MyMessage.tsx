interface Props {
    text: string;
}

export const MyMessage = ({ text }: Props) => {
    return (
        <div className="col-start-7 col-end-13 p-5 rounded-lg ">
            <div className="flex flex-row-reverse gap-3 items-center ">
                <div className="flex  items-center justify-center size-10 rounded-full bg-indigo-500 flex-shrink-0">
                    F
                </div>
                <div className="relative ml-3 text-sm 2xl:text-base font-normal text-wrap  bg-black bg-opacity-25 pt-4 pb-2 px-5 shadow rounded-xl antialiased">
                    <div>{text}</div>
                </div>
            </div>
        </div>
    );
};
