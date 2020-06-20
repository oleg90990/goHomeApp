import { IStateUserReducer, IUser } from '../store/user';
import Axios from '../utilites/axios';
import { AxiosResponse } from 'axios';

export interface IUserUpdateData {
    email: string,
    name: string,
    password: string,
    c_password: string,
    city_id?: number
}

export default class ApiUser {
    public static async login(email: string, password: string): Promise<AxiosResponse<IStateUserReducer>> {
        return Axios.post('user/login', {
            email, password
        });
    }

    public static async register(data: IUserUpdateData): Promise<AxiosResponse<IStateUserReducer>> {
        return Axios.post('user/register', data);
    }

    public static async update(data: IUserUpdateData): Promise<AxiosResponse<IUser>> {
        return Axios.post('user/update', data);
    }

    public static async me(): Promise<AxiosResponse<IUser>> {
        return Axios.get('user/me');
    }
}