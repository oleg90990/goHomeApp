import { IStateDictionariesReducer, IDictionaryColorItem, IDictionaryItem } from '../../store/dictionaries';

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
    getColorsByIds: (colors: number[]) => IDictionaryColorItem[],
    getBreedById: (breedId: number, animal: number) => IDictionaryItem | undefined 
}

export interface IItemProps extends IItem {
}