import AsyncStorage from '@react-native-community/async-storage';

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
    }
}