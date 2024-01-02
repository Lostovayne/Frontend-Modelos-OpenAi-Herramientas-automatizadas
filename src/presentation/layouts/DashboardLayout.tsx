import { Outlet } from "react-router-dom";
import { SidebarMenuItem } from "../components";
import { menuRoutes } from "../router/router";

export const DashboardLayout = () => {
    return (
        <main className="flex flex-row mt-7  2xl:max-w-[110rem] mx-auto ">
            <nav className="hidden sm:flex  flex-col ml-5 w-[400px] 2xl:w-[500px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
                <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
                    ReactGPT<span className="text-indigo-500">.</span>
                </h1>
                <span className="text-xl">Bienvenido</span>
                <div className="border-gray-700 border my-1 xl:my-3" />

                {menuRoutes.map((options) => (
                    <SidebarMenuItem key={options.to} {...options} />
                ))}
            </nav>

            <section className="mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
                <div className="flex flex-row h-full">
                    <div className="flex flex-col flex-auto h-full p-1">
                        <Outlet />
                    </div>
                </div>
            </section>
        </main>
    );
};
