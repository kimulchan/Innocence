import request from "../axios/axios";

export default {
    getCategoryList(){
        return request({
            url:"/board/category",
            method:"get"
        })
    }
}