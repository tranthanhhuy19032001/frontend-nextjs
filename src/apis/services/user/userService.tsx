import AXIOS_INSTANCE from '@/apis/axios/axiosClient'
import { BaseService } from '../baseService'

export interface User {
    id: string
    name: string
    email: string
    avatar?: string
}

export interface LoginPayload {
    email: string
    password: string
}

export interface RegisterPayload {
    name: string
    email: string
    password: string
}

export class userService extends BaseService {
    url: string = '/user-identity'

    login = async (credential: {
        username: string
        password: string
    }): Promise<any> => {
        let result = {}
        try {
            const response = await AXIOS_INSTANCE.post(
                `${this.url}/auth/login`,
                JSON.stringify(credential),
            )
            if (response.status !== 200) {
                throw new Error(response.data.message)
            }
            result = {
                isSuccess: Boolean(response.data),
                message: response.data,
                data: response.data,
            }
        } catch (error: any) {
            result = { isSuccess: false, message: error.message }
            // store.dispatch(
            //     openNotification({
            //         open: true,
            //         content: error.message,
            //         severity: 'error',
            //     }),
            // )
        }
        return result
    }

    register = async (payload: RegisterPayload): Promise<any> => {
        let result = {}
        try {
            const response = await AXIOS_INSTANCE.post(
                `${this.url}/auth/register`,
                payload,
            )
            if (response.status !== 201) {
                throw new Error(response.data.message)
            }
            result = {
                isSuccess: Boolean(response.data),
                message: response.data.message,
                data: response.data,
            }
        } catch (error: any) {
            result = { isSuccess: false, message: error.message }
            // store.dispatch(
            //     openNotification({
            //         open: true,
            //         content: error.message,
            //         severity: 'error',
            //     }),
            // )
        }
        return result
    }

    getAllUsers = async (): Promise<any> => {
        let result = {}
        try {
            const response = await AXIOS_INSTANCE.get(`${this.url}/users`)
            result = {
                isSuccess: Boolean(response.data),
                message: response.data.message,
                data: response.data,
            }
        } catch (error: any) {
            result = { isSuccess: false, message: error.message }
            // store.dispatch(
            //     openNotification({
            //         open: true,
            //         content: error.message,
            //         severity: 'error',
            //     }),
            // )
        }
        return result
    }

    getUserById = async (id: string): Promise<any> => {
        let result = {}
        try {
            const response = await AXIOS_INSTANCE.get(`${this.url}/users/${id}`)
            result = {
                isSuccess: Boolean(response.data),
                message: response.data.message,
                data: response.data,
            }
        } catch (error: any) {
            result = { isSuccess: false, message: error.message }
            // store.dispatch(
            //     openNotification({
            //         open: true,
            //         content: error.message,
            //         severity: 'error',
            //     }),
            // )
        }
        return result
    }

    updateUser = async (id: string, payload: Partial<User>): Promise<any> => {
        let result = {}
        try {
            const response = await AXIOS_INSTANCE.put(
                `${this.url}/users/${id}`,
                payload,
            )
            result = {
                isSuccess: Boolean(response.data),
                message: response.data.message,
                data: response.data,
            }
        } catch (error: any) {
            result = { isSuccess: false, message: error.message }
            // store.dispatch(
            //     openNotification({
            //         open: true,
            //         content: error.message,
            //         severity: 'error',
            //     }),
            // )
        }
        return result
    }

    deleteUser = async (id: string): Promise<any> => {
        let result = {}
        try {
            const response = await AXIOS_INSTANCE.delete(
                `${this.url}/users/${id}`,
            )
            result = {
                isSuccess: response.status === 204,
                message:
                    response.status === 204
                        ? 'User deleted successfully'
                        : response.data.message,
                data: response.data,
            }
        } catch (error: any) {
            result = { isSuccess: false, message: error.message }
            // store.dispatch(
            //     openNotification({
            //         open: true,
            //         content: error.message,
            //         severity: 'error',
            //     }),
            // )
        }
        return result
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new userService()
