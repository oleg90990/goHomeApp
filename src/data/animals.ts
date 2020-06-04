import { Animal } from '../enum/Form';

export interface IAnimalItem {
    source: any;
    name: Animal;
}

const animals: IAnimalItem[] = [
    {
        source: require('~/../../assets/img/animals/cat.png'),
        name: Animal.cat
    },
    {
        source: require('~/../../assets/img/animals/dog.png'),
        name: Animal.dog
    }
];

export default animals;