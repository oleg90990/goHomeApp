import { IStateDictionaries } from '../store/dictionaries'
import data from '../fakeData/dictionaries';
import { AxiosResponse } from 'axios';

export default class ApiDictionaries {
    public static loadDictionaries(): Promise<AxiosResponse<IStateDictionaries>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: any = data;
                resolve({
                    data
                });
            }, 100)
        });
    }
}