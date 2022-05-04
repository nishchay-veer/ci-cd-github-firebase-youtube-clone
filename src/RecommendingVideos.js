import React from "react";
import './RecommendingVideos.css';
import VideoCard from "./videoCard";
function Recommended() {
    return (
        <div className="recommendingVideos">
            {/* <h3>Recommended</h3> */}
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/UJQIMO7Lso0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRtnYY2uEEbBcg0Roc2uTueE0veQ"
                image="https://yt3.ggpht.com/ytc/AKedOLRb1ugnpZU9Cb2wF07qqiwvVQ6ZJTfMxkrVXPUMh_A=s68-c-k-c0x00ffffff-no-rj"
                title="NASA's SpaceX Crew-3: Mission For Science"
                channel="NASA"
                views="6.4K Views"
                timestamp="22 hours ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/j9qGmO8Yy-Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAs0y9PpN_nxAMrDIvXxpz1wr7pdA"
                image="https://yt3.ggpht.com/ytc/AKedOLRSMpZ9D2BtDJbw9rL4jBf7TvEZaDFgZ49b_Ah16Q=s68-c-k-c0x00ffffff-no-rj"
                title="Sundar Pichai, CEO of Google and Alphabet"
                channel="Stanford Graduate School of Business"
                views="234K Views"
                timestamp="6 Days ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/CPVLrU5Fk5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgrMHCL8mbiyq54b0g6TgmhMBQPg"
                image="https://yt3.ggpht.com/ytc/AKedOLSNpk4fYTYdb_uw5ucp3IPOcjNz4o3QQszVCkoPgg=s68-c-k-c0x00ffffff-no-rj"
                title="Inside the IIT Dream"
                channel="Tried&Refuse Productions"
                views="234K Views"
                timestamp=" 1 year ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/USs37vVVOKs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOXxQUBOsgB1qVl43E0Q7sOd-2lw"
                image="https://yt3.ggpht.com/eFFbvZNxBKVUd3lhwEOkDuVwfPqqxsoC_N3XKCfc-Fm30uFbM1lemmnoS1hFVNFKwaXrV3x-KR8=s68-c-k-c0x00ffffff-no-rj"
                title="Introducing the AVINYA Concept EV I A New Paradigm of Innovation"
                channel="Tata Motors Cars"
                views="977K Views"
                timestamp="4 Days ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/-rVggImfJNE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz2yxRGJWzncSQ6eOWf9Tno3c5tA"
                image="https://yt3.ggpht.com/ytc/AKedOLR8ciQtlVEsoBuasGWZiap8JobdvgHJfnSUTryE4A=s68-c-k-c0x00ffffff-no-rj"
                title="Shape of You X Pasoori X Masakali | Khudgarz"
                channel="Khudgarz Official"
                views="689K Views"
                timestamp= "1 month ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/1F-TFwX19-o/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaiOzg0M93nyNZ3KVRnx1bNTt3zA"
                image="https://yt3.ggpht.com/5DmhCHgf5_Z0pLIExGWI9_5jO7T8JNXH3ISTOcLo9NW8bpTlBk2xLkQ3dfhzL-V7V8PNcxsy=s68-c-k-c0x00ffffff-no-rj"
                title="Why I Prefer Twitter over LinkedIN"
                channel="Kunal Kushwaha"
                views="31K Views"
                timestamp="7 Days ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/7sB052Pz0sQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEjBw652UzKlczKZiwKjF9bnLgkA"
                image="https://yt3.ggpht.com/ytc/AKedOLRA3PpZSo8KCCq8sOUlKk38II1FNqQhgUz2BTre=s68-c-k-c0x00ffffff-no-rj"
                title="MIT Introduction to Deep Learning | 6.S191"
                channel="Alexander Amini"
                views="234K Views"
                timestamp=" 1 year ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/Y2Oj9gllHno/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNsiucDjYGTBJqLj4o_3DztII1DA"
                image="https://yt3.ggpht.com/ytc/AKedOLSvPEUzOL_qQkQQd17lcsvj3ikeb2iEj92MUBi91A=s68-c-k-c0x00ffffff-no-rj"
                title="I am a Chef | Aakash Gupta | StandUp Comedy"
                channel="Aakash Gupta"
                views="231K Views"
                timestamp="2 days ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/n_Wno11awXA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0bCasfoHSk8mIQr8pXnKbOwwA_A"
                image="https://yt3.ggpht.com/ytc/AKedOLSY_pK-Mb-Ok1bnklLQKtHxU5vD7yFCdPK36t_AGQ=s68-c-k-c0x00ffffff-no-rj"
                title="How to be a Successful Creator ?Future of Content Creation"
                channel="Raj Shamani"
                views="55K Views"
                timestamp="10 days ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/jElBSZ5mgjk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8lrV8BXMWKDQXbWZBGmW2Otx-FQ"
                image="https://yt3.ggpht.com/ytc/AKedOLSouZh3cVQAC3X0lbj8Buada614gCJiFvnZMoIocA=s68-c-k-c0x00ffffff-no-rj"
                title="Toh Aaagye Hum | Jubin Nautiyal Mithoon Song | Raw Cover"
                channel="Amaan Shah Official"
                views="29K Views"
                timestamp=" 1 year ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/TJKnZ784bSI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKDviU6U0_RXOH_lVmzgwOdMQ6Sw"
                image="https://yt3.ggpht.com/ytc/AKedOLTZloGQkLBOEhaQ7mR-DLvcslyP1bq4EIcIXPqNMA=s68-c-k-c0x00ffffff-no-rj"
                title="CS50P - Lectures 0 1 2 - LiveShoot"
                channel="CS50"
                views="761K Views"
                timestamp="Streamed 1 year ago" />
            </div>
            <div className="videoCard">
                <VideoCard 
                thumbnail="https://i.ytimg.com/vi/-F5D08NCJ9s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXZ4AUhQt8TdRQ6geRyyJ7uttjBg"
                image="https://yt3.ggpht.com/QQxn6hSdStL-VcuX_etPIbukeFXe0YIRZmGLz0wQ1f5e_OMViLxE2x9ZVpeFeMVJA3B34oy4zA=s68-c-k-c0x00ffffff-no-rj"
                title="Best Backend Project for your Resume"
                channel="codedamn"
                views="7.6K Views"
                timestamp="1 day ago" />
            </div>
            


        </div>

    )
}
export default Recommended