import { IState } from '../types';
import { IAnimalType } from '../dictionaries';

export const getAnimal = ({ dictionaries }: IState) => (findlId: number): IAnimalType | undefined  => {
    return dictionaries.dictionaries.animals.find(({ id }) => id === findlId);
}