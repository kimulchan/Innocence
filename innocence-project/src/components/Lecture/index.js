import * as L from './style';
import LectureList from './LectureList/LectureList';
import MyInfo from './MyInfo/MyInfo'
import MenuBar from '../Main/MenuBar/MenuBar';
function index({match}){
    return(
        <>
            <MenuBar></MenuBar>
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