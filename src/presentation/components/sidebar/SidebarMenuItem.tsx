import { NavLink } from "react-router-dom";

interface PropsItem {
    to: string;
    icon: string;
    title: string;
    description: string;
}

export const SidebarMenuItem = ({ to, icon, title, description }: PropsItem) => {
    return (
        <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
                    : "flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors"
            }
        >
            <i className={`${icon} text-xs md:text-base 2xl:text-2xl mr-4 text-indigo-300`} />
            <div className="flex flex-col flex-grow">
                <span className="text-white/80 text-sm  2xl:text-lg font-semibold">
                    {title}
                </span>
                <span className="text-gray-400 text-xs xl:text-sm">{description}</span>
            </div>
        </NavLink>
    );
};
