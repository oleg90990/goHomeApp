import cats from './breeds/cats';
import dogs from './breeds/dogs';
import { IStateDictionaries } from '../store/dictionaries';

const val: IStateDictionaries = {
    animals: [
        {
            id: 1,
            title: 'Кот',
            img: 'https://penguin-art.ru/storage/app/media/gohome/img/animals/cat.png',
            breeds: cats,
            genders: {
                male: 'Кот',
                female: 'Кошка',
                _none: 'Неизвестно',
            }
        },
        {
            id: 2,
            title: 'Собака',
            img: 'https://penguin-art.ru/storage/app/media/gohome/img/animals/dog.png',
            breeds: dogs,
            genders: {
                male: 'Кабель',
                female: 'Сука',
                _none: 'Неизвестно',
            }
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