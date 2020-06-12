import items from '../fakeData/items';
import { IItem } from '../scens/Item/types';
import { IStateSearchFormReducer } from '../store/searchForm';
import { Sortby } from '../enum/Form';

export default class ApiItems {
    public static findItems(params: IStateSearchFormReducer, sortBy: Sortby): Promise<IItem[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: any = items;
                resolve(d);
            }, 500)
        });
    }

    public static loadMyAds(): Promise<IItem[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: any = items;
                resolve([...d]);
            }, 500)
        });
    }
}