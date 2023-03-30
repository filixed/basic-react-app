import { useState } from "react";
import { List } from "../components/list/list";
import { ListElement } from "../components/listElement/listElement";
import { SideBar } from "../components/sideBar/sideBar";
import { NavStyle } from "./main/navStyle";

interface Props {
    children: React.ReactNode;
}

const MainMenu: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Small bar at the top when sidebar is hidden */}
            {!isOpen && (
                <div
                    className="bg-gray-700 h-full w-20 fixed top-0 left-0 flex justify-center"
                    onClick={toggleSidebar}
                >
                    <div className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
                        <span className="text-white text-lg font-bold">+</span>
                    </div>
                </div>
            )}


            <div
                className={`bg-gray-700 h-screen w-64 fixed top-0 left-0 transform transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between h-16 px-4">
                    <div className="text-xl text-white font-bold">Sidebar</div>
                    <div onClick={toggleSidebar} className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
                        <span className="text-white text-lg font-bold">+</span>
                    </div>
                </div>
                <div className="py-4">
                    <SideBar className="h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded shadow-lg w-64 p-2">
                        <List navClassName='mt-6'>
                            <ListElement listElementValue={'example menu element'} style={NavStyle} />
                            <ListElement listElementValue={'example menu element1'} style={NavStyle} />
                            <ListElement listElementValue={'example menu element2'} style={NavStyle} />
                        </List>
                        <List>
                            <ListElement listElementValue={'example menu element'} style={NavStyle} />
                            <ListElement listElementValue={'example menu element1'} style={NavStyle} />
                            <ListElement listElementValue={'example menu element2'} style={NavStyle} />
                        </List>
                    </SideBar>
                </div>
            </div>
        </>
    );
};

export default MainMenu;


