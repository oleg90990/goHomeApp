import items from '../fakeData/items';
import { IItem } from '../scens/Item/types';
import { IStateSearchFormReducer } from '../store/searchForm';
import { Sortby } from '../enum/Form';
import Axios from '../utilites/axios';
import { AxiosResponse } from 'axios';

type ICreatePostBdy = Omit<IItem, 'id' | 'user_id' | 'active'>;

export default class ApiItems {
    public static createAd(params: ICreatePostBdy): Promise<AxiosResponse<IItem>> {
        return Axios.post('ads/store', params);
    }
    
    public static find(params: IStateSearchFormReducer, sortBy: Sortby): Promise<AxiosResponse<IItem[]>> {
        return Axios.post('ads/find', { params, sortBy });
    }

    public static me(): Promise<AxiosResponse<IItem[]>> {
        return Axios.get('ads/me');
    }

    public static publish(adId: number, active: boolean): Promise<AxiosResponse<IItem>> {
        console.log(`ads/${adId}/publish`)
        return Axios.post(`ads/${adId}/publish`, {
            active
        });
    }
}