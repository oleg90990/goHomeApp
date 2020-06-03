import React from 'react';
import { Container, Content, Text } from 'native-base';
import { Animal, Color } from '../../enum/Form';
import Item from './components/Item';
import { IAgeWidgetvalue } from '../../components/widgets/AgeWidget';

export interface IItemsState {
    animal: Animal,
    ages: IAgeWidgetvalue,
    colors: Color[]
}

const Items: React.FC<IItemsState> = (props) => {
    const items = {
        dog: [
            {
                id: 1,
                title: 'Хочет домой лосковый пес',
                content: 'Щенок ищет дом. Очень ласковый и дружелюбный. Любит кошек и людей.',
                age: 15,
                images: [
                    'https://i.ytimg.com/vi/GUt0sQQR-T8/maxresdefault.jpg',
                    'https://img-fotki.yandex.ru/get/6205/87597588.a/0_95cc9_e4c92704_L.jpg',
                    'https://bipbap.ru/wp-content/uploads/2017/03/Prikolnye-foto-sobak-14.jpg'
                ]
            },
            {
                id: 2,
                title: 'Хочет',
                content: 'Щенок ищет дом. Очень ласковый и дружелюбный. Любит кошек и людей.',
                age: 15,
                images: [
                    'https://i.ytimg.com/vi/GUt0sQQR-T8/maxresdefault.jpg',
                    'https://img-fotki.yandex.ru/get/6205/87597588.a/0_95cc9_e4c92704_L.jpg',
                    'https://bipbap.ru/wp-content/uploads/2017/03/Prikolnye-foto-sobak-14.jpg'
                ]
            },
            {
                id: 3,
                title: 'Хочет домой лосковый пес',
                content: 'Щенок ищет дом. Очень ласковый и дружелюбный. Любит кошек и людей.',
                age: 15,
                images: [
                    'https://i.ytimg.com/vi/GUt0sQQR-T8/maxresdefault.jpg',
                    'https://img-fotki.yandex.ru/get/6205/87597588.a/0_95cc9_e4c92704_L.jpg',
                    'https://bipbap.ru/wp-content/uploads/2017/03/Prikolnye-foto-sobak-14.jpg'
                ]
            }
        ],
        cat: [
            {
                id: 4,
                title: 'Кот',
                content: 'Щенок ищет дом. Очень ласковый и дружелюбный. Любит кошек и людей.',
                age: 15,
                images: [
                    'https://i.ytimg.com/vi/GUt0sQQR-T8/maxresdefault.jpg',
                    'https://img-fotki.yandex.ru/get/6205/87597588.a/0_95cc9_e4c92704_L.jpg',
                    'https://bipbap.ru/wp-content/uploads/2017/03/Prikolnye-foto-sobak-14.jpg'
                ]
            },
            {
                id: 5,
                title: 'Хочет домой лосковый кот',
                content: 'Щенок ищет дом. Очень ласковый и дружелюбный. Любит кошек и людей.',
                age: 15,
                images: [
                    'https://i.ytimg.com/vi/GUt0sQQR-T8/maxresdefault.jpg',
                    'https://img-fotki.yandex.ru/get/6205/87597588.a/0_95cc9_e4c92704_L.jpg',
                    'https://bipbap.ru/wp-content/uploads/2017/03/Prikolnye-foto-sobak-14.jpg'
                ]
            }
        ],
    };


    return (
        <Container>
            <Content padder>
                {( items[props.animal].map((item: any, index) => {
                    return <Item key={index} item={item} />
                }))}
            </Content>
        </Container>
    );
};

export default Items;