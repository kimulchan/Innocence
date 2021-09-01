import request from "../axios/axios";


export default { 
    postJoin(name,studentId,password){

    return request({
        url:"/user/signup",
        method:"post",
        data:{
            name:name,
            uid:studentId,
            password:password,
            
        }
    })
}
}