import { IStateDictionariesReducer, IDictionaryColorItem, IDictionaryItem } from '../../store/dictionaries';
import { IStateUserReducer } from '../../store/user';

export interface IItem {
    id: number,
    title: string,
    images: string[],
    content: string,
    age: number,
    colors: number[],
    animal: number,
    breed: number,
    phone: string,
    active: boolean,
    user_id: number,
    getColorsByIds: (colors: number[]) => IDictionaryColorItem[],
    getBreedById: (breedId: number, animal: number) => IDictionaryItem | undefined 
}

export interface IItemProps extends IItem {
    user: IStateUserReducer
}