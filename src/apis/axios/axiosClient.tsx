import axios, {
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios'

// Tạo axios instance
const AXIOS_INSTANCE: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8888/api/v1', //process.env.NEXT_PUBLIC_API_BASE_URL, // Ex: http://localhost:8080/api
    timeout: 10000, // 10 giây
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request interceptor (gắn token nếu có)
AXIOS_INSTANCE.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token')
            // Chỉ gắn nếu token tồn tại và hợp lệ
            if (token && token !== 'undefined' && token !== 'null') {
                config.headers['Authorization'] = `Bearer ${token}`
            } else {
                // Xóa header Authorization nếu tồn tại từ trước
                delete config.headers['Authorization']
            }
        }
        return config
    },
    (error) => {
        console.error('Request error:', error)
        return Promise.reject(error)
    },
)

// Response interceptor (bắt lỗi, log, hoặc xử lý response chung)
AXIOS_INSTANCE.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        if (error.response) {
            console.error(
                `API Error [${error.response.status}]:`,
                error.response.data?.message || error.message,
            )

            if (error.response.status === 401) {
                // Xử lý token hết hạn, logout, redirect nếu cần
                console.warn('Unauthorized! Redirecting to login...')
                // window.location.href = '/login';
            }
        } else if (error.request) {
            console.error('No response from server:', error.request)
        } else {
            console.error('Axios error:', error.message)
        }

        return Promise.reject(error)
    },
)

export default AXIOS_INSTANCE
