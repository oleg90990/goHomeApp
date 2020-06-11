import AsyncStorage from '@react-native-community/async-storage';
import { IStateUserReducer } from '../store/user';

export default {
    setJwt: async (jwt: string) => {
        await AsyncStorage.setItem('jwt', jwt);
    },
    getJwt: async (): Promise<string | null> => {
        return await AsyncStorage.getItem('jwt');
    },
    removeJwt: async () => {
        await AsyncStorage.removeItem('jwt');
    },
    isAuth: async () => {
        return await AsyncStorage.getItem('jwt') !== null;
    },
    setUser: async(user: IStateUserReducer) => {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    },
    getUser: async(): Promise<IStateUserReducer | null> => {
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