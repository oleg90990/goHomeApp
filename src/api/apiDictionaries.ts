import { IStateDictionariesReducer } from '../store/dictionaries'
import { AxiosResponse } from 'axios';
import Axios from '../utilites/axios';

export interface ICityItem {
    id: number,
    name: string,
    parent_id: number | null
}

export default class ApiDictionaries {
    public static loadDictionaries(): Promise<AxiosResponse<IStateDictionariesReducer>> {
        return Axios.get('dictionaries');
    }

    public static findCity(q: string, regions: boolean): Promise<AxiosResponse<ICityItem[]>> {
        return Axios.post('dictionaries/city', { q, regions });
    }
}