import request from "../axios/axios";

export default {
    postBoard(category,language,lecture,title,URL){
        return request({
            url:"/board",
            method:"post",
            data:{
                category:category,
                language:language,
                lecture:lecture,
                title:title,
                URL:URL
            }
        })
    },
    getBoard(category,language){
        return request({
            url:`/board/${category}/${language}`,
            method:"get",
        })
    }
}