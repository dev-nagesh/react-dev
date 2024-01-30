import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    console.log("Render/Re-Render");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="m-4 flex justify-between bg-pink-200 sm:bg-yellow-100 lg:bg-green-200 shadow-md rounded-full">
            <div className="w-20">
                <img className="rounded-full" src={LOGO_URL} />
            </div>
            <ul className="flex items-center gap-2 m-2 px-4">
                <li>
                    Online Status:<b>{onlineStatus ? 'Online': 'Offline'}</b>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li>cart</li>
                <button className="bg-gray-400 p-2 rounded-md text-white" onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </ul>
        </div>
    )
}

export default Header;