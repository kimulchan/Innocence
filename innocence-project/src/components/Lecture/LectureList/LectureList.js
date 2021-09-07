import board from '../../../utils/api/board';
import * as L from './style';
function LectureList ({match}){

    const {category,language} = match.params;
    
    const getList = ()=>{
        board.getBoard(category,language).then((res)=>{
            res.data.map(mapList);
        })
    }
    
    const mapList = ({lecture})=>{
        return(
            <L.LectureBox>
                <L.LectureSubject>{category}</L.LectureSubject>
                <L.LectureName>{lecture}</L.LectureName>
            </L.LectureBox>
        )
    }


    return (
        <L.LectureListWrapper>
            <L.SubjectName>{category}{`${language?`/${language}`:""}`}</L.SubjectName>
                {getList()}
        </L.LectureListWrapper>
    )
}

export default LectureList;