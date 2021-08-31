import request from '../axios/axios';

export default{
    postLogin (studentId,password){
        return request({
            url:'/user/login',
            method:'post',
            data:{
               student_id: studentId,
               password:password
            }
        })
    }
}