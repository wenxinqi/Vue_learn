import axios from "axios";
import router from "./router";
import { ElMessage } from 'element-plus'; //vue3.0需要使用element-plus

// axios.defaults.baseURL = 'http://localhost:8081'

const request = axios.create({
    timeout:5000,
    headers:{
        headers: {
            'Content-Type': "application/json; charset=utf-8"
        }
    }
})

request.interceptors.request.use(config=>{
    config.headers['Authorization'] = localStorage.getItem("token")
	return config
})

request.interceptors.response.use(
	response => {

		console.log("response ->" + response)

		let res = response.data

		if (res.code === 200) {
			return response
		} else {
			// ElementUI.Message.error(!res.msg ? '系统异常' : res.msg)
            ElMessage.error(!res.msg ? '系统异常' : res.msg)
			return Promise.reject(response.data.msg)
		}
	},
	error => {

		console.log(error)

		if (error.response.data) {
			error.massage = error.response.data.msg
		}

		if (error.response.status === 401) {
			router.push("/login")
		}

		// ElementUI.Message.error(error.massage, {duration: 3000})
        ElMessage.error(error.massage, {duration: 3000})
		return Promise.reject(error)
	}
)

export default request