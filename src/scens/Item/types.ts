import {
  IItem,
  IDictionaryColorItem,
  IDictionaryItem,
  IDictionaryAnimalType
} from 'friendshome-api';

export interface IItemProps {
    item: IItem,
    getColorsByIds: (colors: number[]) => IDictionaryColorItem[],
    getBreedById: (breedId: number, animal: number) => IDictionaryItem | undefined,
    getAnimalById: (animalId: number) => IDictionaryAnimalType | undefined
}