import { IStateUserReducer } from '../store/user';
import {  Toast } from 'native-base';

export default class ApiUser {
    public static login(username: string, password: string): Promise<IStateUserReducer> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: IStateUserReducer = {
                    id: 1,
                    username: 'username',
                    phone: '123456789',
                    jwt: 'wqdqwd'
                };

                if (!username || !password) {
                    reject('Пустые поля')
                } else {
                    resolve(d);
                }
            }, 500)
        });
    }

    public static saveUserData(phone?: string, password?: string, replyPassword?: string): Promise<IStateUserReducer> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: IStateUserReducer = {
                    id: 1,
                    username: 'username',
                    phone: phone ? phone : '',
                    jwt: 'wqdqwd'
                };
                resolve(d);
            }, 500)
        });
    }
}