import request from "../axios/axios";

export default {
    postJoin(name,studentId,password){
        request({
            url:url,
            method:'/user/signup',
            data:{
                name:name,
                student_id:studentId,
                password:password
            }
        })
    }
}