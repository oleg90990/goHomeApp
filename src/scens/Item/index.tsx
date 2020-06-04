import React from 'react';
import { Container, Content, Button, Icon } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, Text } from "react-native";
import { IItemProps } from "./types";
  
const Item: React.FC<IItemProps> = (props) => {
  return (
    <Container>
        <SliderBox images={props.images} />
        <Content padder>
            <Text style={styles.Title}>
                { props.title }
            </Text>
            <Text style={styles.Age}>
                { `Возраст: ${props.age} лет` }
            </Text>
            <Text style={styles.Text}>
                { props.content }
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