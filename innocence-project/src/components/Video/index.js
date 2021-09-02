import * as V from './style';
import VideoList from './VideoList/VideoList';
import VideoShow from './VideoShow/VideoShow';
function index (){
    return(
        <V.Wrapper>
            <VideoShow></VideoShow>
            <VideoList></VideoList>
        </V.Wrapper>
    );
}
export default index;