import { IStateDictionaries } from '../store/dictionaries'
import data from '../fakeData/dictionaries';

export default class Api {
    public static loadDictionaries(): Promise<IStateDictionaries> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: any = data;
                resolve(d);
            }, 100)
        });
    }
}