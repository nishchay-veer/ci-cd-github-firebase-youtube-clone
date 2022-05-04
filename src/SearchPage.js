import React from "react";
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';
import SearchHeading from './SearchHeading';
import ChannelRow from './ChannelRow';
import Video from './Video'
function SearchPage() {
    return (
        <div className="container__searchpage">
            <div className="icons">
                <TuneIcon />
                <SearchHeading />
            </div>

            {/* <hr></hr> */}

            <hr></hr>
            <ChannelRow image="https://yt3.ggpht.com/QQxn6hSdStL-VcuX_etPIbukeFXe0YIRZmGLz0wQ1f5e_OMViLxE2x9ZVpeFeMVJA3B34oy4zA=s176-c-k-c0x00ffffff-no-rj-mo"
                channelName="codedamn"
                verified
                subs="262K subscribers"
                videos="1,662"
                description="Hi I create videos mostly related to programming, and sometimes simple hacks and tricks to survive on internet! You'll find me..." />
            <hr></hr>
            <Video image = "https://i.ytimg.com/an_webp/-F5D08NCJ9s/mqdefault_6s.webp?du=3000&sqp=CK_dyZMG&rs=AOn4CLC89dVMveaHCP6MZv3l7f_1NcgRsQ"
            title = "The Best Backend Project for your Resume !!"
            channelName = "codedamn"
            views = "7.5K"
            timestamp = "5 days ago"
            description = "How to Learn Everything? Watch this video to know! Drop a comment below and let us know if you've watched this video till the end..."/>
            <Video image = "https://i.ytimg.com/an_webp/FAO65S90Dmo/mqdefault_6s.webp?du=3000&sqp=CMLAyZMG&rs=AOn4CLDw_Z7gAyRX63Wkg9NQHyWeXBUB1Q"
            title = "Get paid to make websites- freelancing in web development | QnA with @codedamn"
            channelName = "Curious Harish"
            views = "12.5K"
            timestamp = "Streamed 1 year ago"
            description = "How to Learn Everything? Watch this video to know! Drop a comment below and let us know if you've watched this video till the end..."/>
            <Video image = "https://i.ytimg.com/an_webp/SgVXmtMUjbI/mqdefault_6s.webp?du=3000&sqp=CJjXyZMG&rs=AOn4CLAck9aqqVhYnssGumTm3eFES9hFWg"
            title = "COMPLETE full stack web developer in 2022"
            channelName = "codedamn"
            views = "101K"
            timestamp = "4 months ago"
            description = "How to Learn Everything? Watch this video to know! Drop a comment below and let us know if you've watched this video till the end..."/>
            <Video image = "https://i.ytimg.com/an_webp/_WJZ3wbUtTc/mqdefault_6s.webp?du=3000&sqp=CJjMyZMG&rs=AOn4CLBuv6d4el2Dn164oE5VH48wAo21ZA"
            title = "How to get a develper job WITHOUT a computer science degree!"
            channelName = "codedamn"
            views = "12K"
            timestamp = "6 months ago"
            description = "How to Learn Everything? Watch this video to know! Drop a comment below and let us know if you've watched this video till the end..."/>
            <Video image = "https://i.ytimg.com/an_webp/jSrT2qjKGyE/mqdefault_6s.webp?du=3000&sqp=CMz8yZMG&rs=AOn4CLAAx0VcNB2y1ZqzZ_8JH5priANc9g"
            title = "The Only Every Developer should have in 2022"
            channelName = "codedamn"
            views = "14K"
            timestamp = "10 days ago"
            description = "How to Learn Everything? Watch this video to know! Drop a comment below and let us know if you've watched this video till the end..."/>
            
            <Video image = "https://i.ytimg.com/an_webp/TUhYVKTF78M/mqdefault_6s.webp?du=3000&sqp=CJ3ryZMG&rs=AOn4CLAKjXM9Qg5_dyF1953YoEAq1t3b3g"
            title = "How to Build Logic as a Front-End Developer"
            channelName = "codedamn"
            views = "15K"
            timestamp = "10 days ago"
            description = "How to Learn Everything? Watch this video to know! Drop a comment below and let us know if you've watched this video till the end..."/>

        </div>

    )
}
export default SearchPage