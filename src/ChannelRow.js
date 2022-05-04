import React from "react";
import './ChannelRow.css';
function ChannelRow({ image, channelName, subs, videos, description, verified }) {
    return (
        <div className="channel__container">
            <div className="channel__logo">
                <img src={image} alt="" />
            </div>
            <div className="channel__info">
                <h3>{channelName}</h3>
                <p>{subs} ~ {videos} videos</p>
                <p>{description}</p>
            </div>
            <div className="btn">
                <button>SUBSCRIBE</button>
            </div>

        </div>
    )
}
export default ChannelRow