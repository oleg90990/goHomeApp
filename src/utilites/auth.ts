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
}