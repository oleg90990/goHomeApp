import AsyncStorage from '@react-native-community/async-storage';
import { IUser } from '../store/user';

export default {
    setToken: async (token: string) => {
        await AsyncStorage.setItem('token', token);
    },
    getToken: async (): Promise<string | null> => {
        return await AsyncStorage.getItem('token');
    },
    removeToken: async () => {
        await AsyncStorage.removeItem('token');
    },
    isAuth: async () => {
        return await AsyncStorage.getItem('token') !== null;
    },
    setUser: async(user: IUser) => {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    },
    getUser: async(): Promise<IUser | null> => {
        const json = await AsyncStorage.getItem('user');

        if (!json) {
            return null;
        }

        return JSON.parse(json);
    },
    removeUser: async() => {
        await AsyncStorage.removeItem('user');
    }
}