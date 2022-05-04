import React from "react";
import './videocard.css';

function videoCard({ thumbnail, image, title, channel, views, timestamp }) {
    return (
        <div className="container">

            <img src={thumbnail} alt="" />

            <div className="videocard__info">
                <img src={image} alt="" />
                <div className="info">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} ~ {timestamp}</p>
                </div>


            </div>




        </div>



    )

}
export default videoCard