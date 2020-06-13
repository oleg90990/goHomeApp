import { IDictionaryColorItem, IDictionaryItem, IDictionaryAnimalType } from '../../store/dictionaries';
import { IStateUserReducer } from '../../store/user';
import { Gender, YesNo } from '../../enum/Form';

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
    gender: Gender,
    sterilization: YesNo
}

export interface IItemProps extends IItem {
    user: IStateUserReducer,
    getColorsByIds: (colors: number[]) => IDictionaryColorItem[],
    getBreedById: (breedId: number, animal: number) => IDictionaryItem | undefined,
    getAnimalById: (animalId: number) => IDictionaryAnimalType | undefined
}