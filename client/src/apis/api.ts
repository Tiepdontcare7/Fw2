import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:7000',
  timeout: 1000
})

// Thêm interceptor cho yêu cầu
instance.interceptors.request.use(
  function (config) {
    // Trước khi gửi yêu cầu, kiểm tra xem có token trong localStorage không
    const token = localStorage.getItem('token')

    if (token) {
      // Nếu có token, thêm nó vào header của yêu cầu
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  function (error) {
    // Xử lý lỗi nếu có
    return Promise.reject(error)
  }
)

// Thêm interceptor cho phản hồi
instance.interceptors.response.use(
  function (response) {
    // Xử lý dữ liệu phản hồi nếu cần
    return response
  },
  function (error) {
    // Xử lý lỗi phản hồi nếu có
    return Promise.reject(error)
  }
)

export default instance
