import request from "../axios/axios";


export default { 
    postJoin(name,student_id,password){
    return request({
        url:"/user/signup",
        method:"post",
        data:{
            uid:student_id,
            password:password,   
            name:name
        }
    })
}
}