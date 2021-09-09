export const ADD_LECTURE = "ADD_LECTURE";

export const AddLecture=(path)=>{
    return {type:ADD_LECTURE,
            LecturePath:path
        }
}