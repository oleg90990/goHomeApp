import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Modal, View, Text } from "react-native";
import { List, Item, ListItem, Thumbnail, Left, Body, Button, Input, Icon } from 'native-base';

import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { IStateDictionaries } from 'friendshome-api';

interface IBreedsWidgetProps extends IStateDictionaries {
  onSelected: (value: number) => void;
  animal: number | undefined;
}

const BreedSelect: React.FC<IBreedsWidgetProps> = ({ animals, onSelected, animal }) => {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState('');
    
  function onFiltered() {
    if (!animal) {
      return [];
    }

    const selectedAnimal = animals
      .find(({ id }) => id === animal);

    return selectedAnimal ? selectedAnimal.breeds.filter(({ name }) => {
      return name.toLowerCase().includes(input.toLowerCase());
    }) : [];
  }

  function onItemSelected(id: number) {
    onSelected(id);
    setVisible(false);
  }

  return (
    <View>
      <Button style={styles.Button} onPress={() => setVisible(!visible)}>
        <Text style={styles.ButtonText}>Добавить породу</Text>
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
            {(onFiltered().map(({ id, name, img }, key) => {
              return <ListItem key={key} thumbnail onPress={() => onItemSelected(id)}>
                <Left>
                  <Thumbnail square source={{ uri: img }} />
                </Left>
                <Body>
                  <Text>{ name }</Text>
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

const mapStateToProps = ({ dictionaries }: IState) => {
  return dictionaries;
};
  
export default connect(mapStateToProps, {})(BreedSelect);