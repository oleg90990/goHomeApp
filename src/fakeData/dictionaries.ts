import cats from './breeds/cats';
import dogs from './breeds/dogs';

export default {
    animals: [
        {
            id: 1,
            title: 'Кот',
            img: 'http://46.17.40.175/sites/default/files/gohome/img/animals/cat.png',
            breeds: cats
        },
        {
            id: 1,
            title: 'Собака',
            img: 'http://46.17.40.175/sites/default/files/gohome/img/animals/dog.png',
            breeds: dogs
        }
    ]
}