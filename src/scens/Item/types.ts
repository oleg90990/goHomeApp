import { IDictionaryColorItem, IDictionaryItem, IDictionaryAnimalType } from '../../store/dictionaries';
import { IUser } from '../../store/user';
import { Gender, YesNo } from '../../enum/Form';

export interface IItem {
    id: number,
    title: string,
    images: string[],
    content: string,
    age: number,
    colors: number[],
    animal_id: number,
    breed_id: number,
    phone: string,
    active: boolean,
    user_id: number,
    gender: Gender,
    sterilization: YesNo
}

export interface IItemProps {
    item: IItem,
    getColorsByIds: (colors: number[]) => IDictionaryColorItem[],
    getBreedById: (breedId: number, animal: number) => IDictionaryItem | undefined,
    getAnimalById: (animalId: number) => IDictionaryAnimalType | undefined
}