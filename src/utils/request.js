import axios from 'axios'
const request = axios.create({
  baseURL: 'http://ihrm-java.itheima.net/api'
})
export default request
