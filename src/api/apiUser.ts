import { IStateUserReducer, IUser } from '../store/user';
import {  Toast } from 'native-base';

export default class ApiUser {
    public static login(email: string, password: string): Promise<IStateUserReducer> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: IStateUserReducer = {
                    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTEyYzRlNjkzMDAyYTk2NGE1NGI5ZmU5MjZjZmM5MzFjZTcyNTI5YTViOGZhMmY1MGNkMDA4YmRmOTgyMmE0MGMzYjllZmQwNzA5MWVlYmEiLCJpYXQiOjE1OTIxMzUyNjYsIm5iZiI6MTU5MjEzNTI2NiwiZXhwIjoxNjIzNjcxMjY2LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.xSTX8vhVPlsqupozn9tWUzZvtoeYd0AZD5VJvZBAjjzt0AbI7_cKu-397Q1CArQGYQ5Om332mcwplR17-h3l-EiO6wrGJdXfxUG_IM8HjSy9wLhst73RehYZKNmMF_e7zjj_DzPcAOlXGgDij57bk__8G-I4MVpzGV4kHhXioGsF1hJFuo5ONwvvRCia8Ne1QX7_3SRsNCoRf7228HR0OwXOUky-j-UeWSrmFPn3_TfkqpsMAPWvQHx14IyAopikdu4R1Zwp84qYFgYirsbZhwozXlsVeYKdSsQlvJuJ2FbML9yCVoWgL5-DXRTjlQOk0VcCvFSI5DwSNzCzUanOvxEFSnsWFdg3jRK0PKE3WZ6l47gEpCUYu7guISBWW9293Eupd0durtSbaK0Yj5ZvcdaeYphJ-oqEbtQxk7VyzwRpXIWt24kLtUTO4XmnL6ZtcT2V5DHkHMcAnV-Ok5x-Z4C7dlwUTIXzuPWVEHAzcBU_zovC-I9HbRiYtJCigT3faFrhF_HBLQ4igdbzZcg9crmpm026jGpBUfDLwIv8ntX1-HrfbOlIckuDkjHdb8EF8TCIdFEST1mU9OZ9XDqyjDU2EXPkARJzeFC1WU4BoIH3yDtTJcbch1Icv8Cs0XzQWuS_e3e16ObaXxI3y-CtPuagj0UZet7dkqgTbnMY6Wg",
                    "user": {
                        "id": 2,
                        "name": "Вася петров",
                        "email": "qwd2@wqdq.com",
                        "email_verified_at": null,
                        "created_at": "2020-06-14T11:18:40.000000Z",
                        "updated_at": "2020-06-14T11:18:40.000000Z"
                    }
                };

                if (!email || !password) {
                    reject('Пустые поля')
                } else {
                    resolve(d);
                }
            }, 500)
        });
    }

    public static saveUserData(phone?: string, password?: string, replyPassword?: string): Promise<IUser> {
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