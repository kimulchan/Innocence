import * as V from './style';
import ReactPlayer from 'react-player';
function VideoShow(){
    return (
        <V.VideoWrapper>
            <V.VideoNameWrapper>BTS FACKLOVE</V.VideoNameWrapper>
            <V.VideoShowWrapper>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=7C2z4GqqS5E' playing controls width="1000px" height="550px"/>

            </V.VideoShowWrapper>
            
        </V.VideoWrapper>
    );
}

export default VideoShow;