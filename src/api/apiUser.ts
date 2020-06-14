import { IStateUserReducer, IUser } from '../store/user';
import Axios from '../utilites/axios';
import { AxiosResponse } from 'axios';

export default class ApiUser {
    public static async login(email: string, password: string): Promise<AxiosResponse<IStateUserReducer>> {
        return Axios.post('user/login', {
            email, password
        });
    }

    public static async register(email: string, name: string, password: string, c_password: string): Promise<AxiosResponse<IStateUserReducer>> {
        return Axios.post('user/register', {
            email, name, password, c_password
        });
    }

    public static async update(email: string, name: string, password?: string, c_password?: string): Promise<AxiosResponse<IUser>> {
        return Axios.post('user/update', {
            email, name, password, c_password
        });
    }
}