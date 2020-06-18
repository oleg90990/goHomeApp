import { IItem } from '../scens/Item/types';
import { IStateSearchFormReducer } from '../store/searchForm';
import { Sortby } from '../enum/Form';
import Axios from '../utilites/axios';
import { AxiosResponse } from 'axios';

type IPostCreatedBody = Omit<IItem, 'id' | 'user_id' | 'active'>;
type IPostUpdateBody = Omit<IItem, 'user_id' | 'active'>;

export default class ApiItems {
    public static create(params: IPostCreatedBody): Promise<AxiosResponse<IItem>> {
        return Axios.post('ads/store', params);
    }

    public static update(params: IPostUpdateBody): Promise<AxiosResponse<IItem>> {
        return Axios.post('ads/update', params);
    }
    
    public static find(params: IStateSearchFormReducer, sortBy: Sortby, page: number): Promise<AxiosResponse<IItem[]>> {
        return Axios.post('ads/find', { ...params, sortBy, page });
    }

    public static me(): Promise<AxiosResponse<IItem[]>> {
        return Axios.get('ads/me');
    }

    public static publish(id: number, active: boolean): Promise<AxiosResponse<IItem>> {
        return Axios.post(`ads/publish`, {
            active,
            id
        });
    }
}