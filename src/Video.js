import React from "react";
import './Video.css'
function Video({image,title, channelName, views, timestamp , description}){
    return(
        <div className = "videoRow">
            <div className="thumbnail">
                <img src={image} alt = ""/>
            </div>
            <div className="videoRow__info">
                <h3>{title}</h3>
                <p>{views} views ~ {timestamp}</p>
                <p>{channelName}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Video