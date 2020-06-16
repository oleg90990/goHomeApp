import { IStateDictionariesReducer } from '../store/dictionaries'
import { AxiosResponse } from 'axios';
import Axios from '../utilites/axios';

export default class ApiDictionaries {
    public static loadDictionaries(): Promise<AxiosResponse<IStateDictionariesReducer>> {
        return Axios.get('dictionaries');
    }
}