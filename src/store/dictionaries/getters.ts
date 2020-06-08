import { IState } from '../types';
import { IDictionaryAnimalType } from '../dictionaries';

export const getAnimal = ({ dictionaries }: IState) => (animalId: number): IDictionaryAnimalType | undefined  => {
    return dictionaries.dictionaries.animals.find(({ id }) => id === animalId);
}