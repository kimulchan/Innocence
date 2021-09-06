import * as L from './style';
import LectureList from './LectureList/LectureList';
import MyInfo from './MyInfo/MyInfo'
function index({match}){
    return(
        <>
            <L.Wrapper>
                <L.ComponentWrapper>
                    <MyInfo></MyInfo>
                    <LectureList match={match}></LectureList>
                </L.ComponentWrapper>
            </L.Wrapper>
        </>
    )
}

export default index;