import AsyncStorage from '@react-native-community/async-storage';

export default {
  setToken: async (token: string): Promise<any> => {
    await AsyncStorage.setItem('token', token);
  },
  getToken: async (): Promise<string | null> => {
    return await AsyncStorage.getItem('token');
  },
  removeToken: async (): Promise<any> => {
    await AsyncStorage.removeItem('token');
  },
  isAuth: async (): Promise<boolean> => {
    return await AsyncStorage.getItem('token') !== null;
  },
}