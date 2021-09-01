import axios from "axios";

const instance = axios.create({
    baseURL:"http://10.220.158.125:4090"
})

instance.interceptors.request.use(
    function (config){
        //요청 성공 직전 호출된다 
        //axios 설정값을 넣는다 
        return config
    },
    function (error){
        // 요청 에러 직전 호출
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    function(response){
        return response;
    },
    function(error){
        //에러 처리 .catch로 이어짐
        return Promise.reject(error);
    }
)
export default instance;