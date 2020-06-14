import { IStateUserReducer, IUser } from '../store/user';
import Axios from '../utilites/axios';
import { AxiosResponse } from 'axios';

export default class ApiUser {
    public static async login(email: string, password: string): Promise<AxiosResponse<IStateUserReducer>> {
        return Axios.post('login', {
            email, password
        });
    }

    public static async saveUserData(phone?: string, password?: string, replyPassword?: string): Promise<IUser> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: IUser = {
                    "id": 2,
                    "name": "Вася петров",
                    "email": "qwd2@wqdq.com",
                    "email_verified_at": null,
                    "created_at": "2020-06-14T11:18:40.000000Z",
                    "updated_at": "2020-06-14T11:18:40.000000Z"
                };
                resolve(d);
            }, 500)
        });
    }
}