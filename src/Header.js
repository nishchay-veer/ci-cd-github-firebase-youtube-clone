import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
// import MicIcon from '@mui/icons-material/Mic';
import './Header.css';
function Header() {
    const [inputSearch, setInputSearch ] = useState("");
    return (
        <div className="header">
            {/* <h1>I am a header</h1> */}
            <div className="header__left">
                
                <MenuIcon />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search" onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}></input>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="search" />
                </Link>

                {/* <MicIcon className="mic"/> */}

            </div>
            <div className="header__right">
                <VideoCallIcon className="icon" />
                <AppsIcon className="icon" />
                <NotificationsIcon className="icon" />
                <AccountCircleIcon className="icon" />
            </div>



        </div>
    )
}
export default Header