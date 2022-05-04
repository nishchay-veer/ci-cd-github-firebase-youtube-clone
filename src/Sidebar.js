import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './Sidebar.css'
import SidebarRow from "./SidebarRow";
function Sidebar() {
    return(
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title = "Home"/>
            <SidebarRow Icon={WhatshotIcon} title = "Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title = "Subscriptions"/>
            <hr></hr>
            <SidebarRow Icon={VideoLibraryIcon} title = "Library"/>
            <SidebarRow Icon={HistoryIcon} title = "History"/>
            <SidebarRow Icon={VideoSettingsIcon} title = "Your Videos"/>
            <SidebarRow Icon={WatchLaterIcon} title = "Watch Later"/>
            <SidebarRow Icon={ThumbUpIcon} title = "Liked Videos"/>
            <SidebarRow Icon={ArrowDropDownIcon} title = "Show More"/>
            <hr></hr>

            
        </div>
    )
}
export default Sidebar