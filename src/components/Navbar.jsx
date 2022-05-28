import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { useStateContext } from "../context/ContextProvider";
import UserProfile from "./UserProfile";
import Notifications from "./Notifications";
import Chat from "./Chat";
import Cart from "./Cart";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <TooltipComponent content={title} position="BottomCenter">
            <button
                type="button"
                onClick={customFunc}
                style={{ color }}
                className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            >
                <span
                    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
                    style={{ background: dotColor }}
                >
                    {icon}
                </span>
            </button>
        </TooltipComponent>
    );
};

const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, handleClick } = useStateContext();

    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton
                title="Menu"
                customFunc={() =>
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                color="blue"
                icon={<AiOutlineMenu />}
        />
        <div className="flex items-center justify-between">
            <NavButton
                title="Cart"
                customFunc={() => handleClick("cart")}
                color="blue"
                icon={<FiShoppingCart />}
            />
            <NavButton
                title="Chat"
                dotColor="#03C9D7"
                customFunc={() => handleClick("chat")}
                color="blue"
                icon={<BsChatLeft />}
            />
            <NavButton
                title="Notification"
                dotColor="#03C9D7"
                customFunc={() => handleClick("notification")}
                color="blue"
                icon={<RiNotification3Line />}
            />
            <TooltipComponent content="Profile" position="BottomCenter">
                <div
                    className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                    onClick={() => handleClick("userProfile")}
                >
                    <img
                        className="rounded-full w-8 h-8"
                        src={avatar}
                        alt="sammy"
                    />
                    <p>
                        <span className="text-gray-400 text-14">Hi, </span>
                        <span className="text-gray-400 font-bold ml-1 text-14">
                            Michael
                        </span>
                    </p>
                    <MdKeyboardArrowDown className="text-gray-400 text-14" />
                </div>
          </TooltipComponent>
          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notifications />}
          {isClicked.userProfile && <UserProfile />}
          </div>
        </div>
    );
};

export default Navbar;
