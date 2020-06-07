import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Modal, View, Text, TouchableNativeFeedback } from "react-native";
import Breeds, { IBreedItem } from '../../data/breeds';
import { Animal } from '../../enum/Form';
import { List, Item, ListItem, Thumbnail, Left, Body, Right, Button, Input, Icon } from 'native-base';

interface IBreedsWidgetProps {
  onSelected: (value: IBreedItem) => void,
  animal: Animal
}

const BreedSelect: React.FC<IBreedsWidgetProps> = (props) => {
    const items = Breeds[props.animal];

    const [
        visible,
        setVisible
    ] = useState<boolean>(false);

    const [
        input,
        setInput
    ] = useState('');

    function onSelected(item: IBreedItem) {
        setVisible(false);
        props.onSelected(item);
    }

    function onFiltered() {
        return items.filter(item => {
            return item.title.toString().search(input) !== -1;
        });
    }

    return (
        <View>
            <Button style={styles.Button} onPress={() => setVisible(!visible)}>
                <Text style={styles.ButtonText}>Выбрать породу</Text>
            </Button>
            <Modal animationType="slide" visible={visible} >
                <View style={styles.ModalInput}>
                    <Item>
                        <Input placeholder='Поиск' value={input} onChangeText={setInput} />
                        <Icon active name='close' onPress={() => setVisible(false)} />
                    </Item>
                </View>
                <ScrollView>
                    <List style={styles.List}>
                        {(onFiltered().map((item, key) => {
                            return <ListItem key={key} thumbnail onPress={() => onSelected(item)}>
                                <Left>
                                    <Thumbnail square source={ item.img } />
                                </Left>
                                <Body>
                                    <Text>{ item.title }</Text>
                                </Body>
                            </ListItem>
                        }))}
                    </List>
                </ScrollView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    BreedItem: {
        marginBottom: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    Button: {
        padding: 20
    },
    ButtonText: {
        color: 'white'
    },
    ModalInput: {
        padding: 15
    },
    List: {
        paddingRight: 15
    }
});

export default BreedSelect;