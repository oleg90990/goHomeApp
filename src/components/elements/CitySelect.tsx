import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, ScrollView } from "react-native";
import { View, Text, Item, Input, Icon, List, ListItem, Body } from 'native-base';
import Api, { ICityItem } from "../../api/apiDictionaries";
import { getLabelCity } from '../../helpers/Labels';

interface IBreedsWidgetProps {
  onSelected: (city: ICityItem) => void,
  includedRegins: boolean,
  value?: ICityItem
}

const CitySelect: React.FC<IBreedsWidgetProps> = ({ includedRegins, onSelected, value }) => {
    const [visible, setVisible] = useState(false);
    const [input, setInput] = useState('');
    const [cities, setCities] = useState<ICityItem[]>([]);

    function onCitySelected(city: ICityItem) {
        onSelected(city);
        setVisible(false);
    }

    function updateCities(text: string) {
        setInput(text);

        Api.findCity(text, includedRegins)
            .then(({ data }) => {
                setCities(data)
            });
    };

    useEffect(() => {
        updateCities('');

        return () => {
            setInput('');
        };
    }, []);

    return (
        <View style={styles.Container}>
            <Text style={styles.Value} onPress={() => setVisible(true)}>
                { getLabelCity(value) }
            </Text>
            <Modal animationType="slide" visible={visible} >
                <View style={styles.ModalInput}>
                    <Item>
                        <Input placeholder='Поиск' value={input} onChangeText={updateCities} />
                        <Icon active name='close' onPress={() => setVisible(false)} />
                    </Item>
                </View>
                <ScrollView>
                    <List style={styles.List}>
                        {(cities.map((city, key) => {
                            return <ListItem key={key} thumbnail onPress={() => onCitySelected(city)}>
                                <Body>
                                    <Text>{ city.name }</Text>
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
    Container: {
        width: '100%'
    },
    ModalInput: {
        padding: 15
    },
    Value: {
        marginTop: 10,
        marginBottom: 10,
        color: 'blue',
        textDecorationStyle: 'solid'
    },
    List: {
        paddingRight: 15
    }
});

export default CitySelect;