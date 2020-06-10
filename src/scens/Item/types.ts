import { IStateDictionariesReducer } from '../../store/dictionaries';

export interface IItem {
    id: number,
    title: string,
    images: string[],
    content: string,
    age: number,
    colors: number[],
    animal: number,
    breed: number,
    phone: string
}

export interface IItemProps extends IItem, IStateDictionariesReducer {
    
}