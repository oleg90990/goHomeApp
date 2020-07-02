import { IDictionaryColorItem, IDictionaryItem, IDictionaryAnimalType } from '../../store/dictionaries';
import { Gender, YesNo } from '../../enum/Form';
import { ICityItem } from '../../api/apiDictionaries';

export interface IItem {
    id: number,
    title: string,
    images: string[],
    content: string,
    age: number,
    colors: number[],
    animal_id: number,
    breed_id: number,
    active: boolean,
    user_id: number,
    gender: Gender,
    sterilization: YesNo
    city?: ICityItem,
    city_id?: number,
    vkPosts: number[]
}

export interface IItemProps {
    item: IItem,
    getColorsByIds: (colors: number[]) => IDictionaryColorItem[],
    getBreedById: (breedId: number, animal: number) => IDictionaryItem | undefined,
    getAnimalById: (animalId: number) => IDictionaryAnimalType | undefined
}