import React from 'react';
import { Container, Content, Button, Icon } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, Text } from "react-native";

interface ISearchState {
    id: number
}
  
const Item: React.FC<ISearchState> = (props) => {

    const item = {
        id: props.id,
        title: 'Хочет домой лосковый пес',
        image: 'https://i.ytimg.com/vi/GUt0sQQR-T8/maxresdefault.jpg',
        content: 'Щенок ищет дом. Очень ласковый и дружелюбный. Любит кошек и людей.',
        age: 15,
        images: [
            'https://i.ytimg.com/vi/GUt0sQQR-T8/maxresdefault.jpg',
            'https://img-fotki.yandex.ru/get/6205/87597588.a/0_95cc9_e4c92704_L.jpg',
            'https://bipbap.ru/wp-content/uploads/2017/03/Prikolnye-foto-sobak-14.jpg'
        ]
    };

  return (
    <Container>
        <SliderBox images={item.images} />
        <Content padder>
            <Text style={styles.Title}>
                { item.title }
            </Text>
            <Text style={styles.Age}>
                { `Возраст: ${item.age} лет` }
            </Text>
            <Text style={styles.Text}>
                { item.content }
            </Text>
            <Button style={styles.Btn}>
            <Text style={styles.ButtonText}>Позвонить</Text>
            </Button>
        </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
    Title: {
        fontSize: 24,
        marginTop: 0
    },
    Age: {
        marginTop: 10,
        fontSize: 20,
    },
    Text: {
        fontSize: 16,
        marginTop: 10
    },
    Btn: {
        justifyContent: 'center',
        marginTop: 20
    },
    ButtonText: {
        color: 'white',
        marginLeft: 10
    }, 
});

export default Item;