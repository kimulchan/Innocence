import styled from 'styled-components'

export const LectureListWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
`

export const SubjectName = styled.div`
    height:40px;
    font-size:23px;
    border-bottom: 1px solid black;
    
`

export const LectureBox =styled.div`
    height:120px;
    margin:10px 0;
    width: 100%;
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding:20px;
`

export const LectureSubject =styled.div`
    height:20px;
    width :70px;
    font-size: 10px;
    font-weight:600;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 10px;
    border: 1px solid #dddddd;
    
`

export const LectureName = styled.div`
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    height:30px;
    margin-top:10px
`