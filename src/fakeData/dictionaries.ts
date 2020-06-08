import cats from './breeds/cats';
import dogs from './breeds/dogs';
import { IStateDictionaries } from '../store/dictionaries';

const val: IStateDictionaries = {
    animals: [
        {
            id: 1,
            title: 'Кот',
            img: 'http://46.17.40.175/sites/default/files/gohome/img/animals/cat.png',
            breeds: cats
        },
        {
            id: 2,
            title: 'Собака',
            img: 'http://46.17.40.175/sites/default/files/gohome/img/animals/dog.png',
            breeds: dogs
        }
    ],
    colors: [
        {
            id: 1,
            title: 'коричневый',
            value: 'brown'
        },
        {
            id: 2,
            title: 'желтный',
            value: 'yellow'
        },
        {
            id: 3,
            title: 'черный',
            value: 'black'
        },
        {
            id: 4,
            title: 'белый',
            value: 'white'
        },
        {
            id: 5,
            title: 'серый',
            value: 'gray'
        }
    ]
}

export default val;