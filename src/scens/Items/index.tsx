import React from 'react';
import { Container, Content, Text } from 'native-base';
import { Animals } from '../../enum/Form';
import Item from './components/Item';

interface ISearchState {
    animal: Animals,
    ages: number[]
}
  
const Items: React.FC<ISearchState> = (props) => {
    const items = {
        dog: [
            {
                id: 1,
                title: 'Хочет домой лосковый пес',
                image: 'https://i.ytimg.com/vi/GUt0sQQR-T8/maxresdefault.jpg'
            },
            {
                id: 2,
                title: 'Хозяева бросили на улицу',
                image: 'https://www.meme-arsenal.com/memes/6727eee92277ff6c2a3ea6f4d95ddb09.jpg'
            },
            {
                id: 3,
                title: 'Помогите псу',
                image: 'https://i.ytimg.com/vi/-ZpHKf-pztM/maxresdefault.jpg'
            },
            {
                id: 4,
                title: 'Заберите домой )))',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgqfqfP29TtYj1IY6C8DENsftwcnGHWEOhqN9heV4vqPb-2wIa&usqp=CAU'
            },
            {
                id: 5,
                title: 'щенок ищет хозяина',
                image: 'https://bm.img.com.ua/img/prikol/images/large/2/5/209652.jpg'
            }
        ],
        cat: [
            {
                id: 6,
                title: 'Котик мяу мяу',
                image: 'https://demotos.ru/sites/default/files/caricatures/2017-05-14-1494767759.jpg'
            },
            {
                id: 7,
                title: 'сотик гаф',
                image: 'https://cs.pikabu.ru/post_img/2012-12_7/1356961016_1908146245.jpg'
            },
        ],
    };


  return (
    <Container>
        <Content padder>
            {( items[props.animal].map((item: any) => {
                return <Item key={item.id} title={item.title} image={item.image} id={item.id} />
            }))}
        </Content>
    </Container>
  );
};

export default Items;