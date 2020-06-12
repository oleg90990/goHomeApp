import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { Form, Item, Input, Picker, Label, Textarea, View, Button, Text } from 'native-base';

import ColorsSelect from '../../components/elements/ColorsSelect';
import AgeSelect from '../../components/elements/AgeSelect';
import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { IStateDictionariesReducer, IDictionaryItem } from '../../store/dictionaries';
import { getBreedsByAnimal } from '../../store/dictionaries/getters';

interface IProps extends IStateDictionariesReducer {
  getBreedsByAnimal: (animal: number) => IDictionaryItem[]
}

const CreatePost: React.FC<IProps> = ({ getBreedsByAnimal, dictionaries }) => {
    const [title, setTitle] = useState('');
    const [animal, setAnimal] = useState(1);
    const [colors, setColors] = useState<number[]>([]);
    const [age, setAge] = useState<number>(1);
    const [breed, setBreed] = useState(0);
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
      setBreed(0);
    }, [animal])

    function getOtions() {
      let options = [];

      for (let index = 1; index <= 20; index++) {
          options.push(<Picker.Item key={index} label={index.toString()} value={index} />)
      }

      return options;
    }

    function createPost() {

    }

    return (
      <Form>
        <Item style={styles.Item}>
          <Label>
            Заголовок
          </Label>
          <Input
            value={title}
            onChangeText={setTitle}
          />
        </Item>
        <Item style={styles.Item}>
          <Label>
            Животное
          </Label>
          <Picker mode="dropdown"
            onValueChange={setAnimal}
            selectedValue={animal}
          >
            {( dictionaries.animals.map(({ id, title }, index) => {
              return <Picker.Item label={title} value={id} key={index} />;
            }) )}
          </Picker>
        </Item>
        <Item style={styles.Item}>
          <Label>
            Порода
          </Label>
          <Picker onValueChange={setBreed} selectedValue={breed} >
            { getBreedsByAnimal(animal).map((breed, index) => {
              return <Picker.Item key={index} label={breed.title.toString()} value={breed.id} />
            })}
          </Picker>
        </Item>
        <Item style={styles.Item}>
          <Label>
            Цвет
          </Label>
          <View style={styles.ColorsSelect}>
            <ColorsSelect 
              value={colors}
              onChange={setColors}
            />
          </View>
        </Item>
        <Item style={styles.Item}>
          <Label>
            Возраст
          </Label>
          <AgeSelect
            value={age}
            onChange={setAge}
          />
        </Item>
        <Item style={styles.Item}>
          <Label>
            Телефон
          </Label>
          <Input
            value={phone}
            onChangeText={setPhone}
          />
        </Item>
        <View>
          <Textarea
            underline
            bordered={false}
            rowSpan={5}
            value={description}
            onChangeText={setDescription}
            placeholder="Описание"
          />
        </View>
        <View>
          <Button block primary onPress={() => {}}>
            <Text>Создать Пост</Text>
          </Button>
        </View>
      </Form>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    marginBottom: 10
  },
  ColorsSelect: {
    margin: 10,
  },
  Item: {
    marginLeft: 0
  }
});

const mapStateToProps = (state: IState) => {
  const dictionaries = state.dictionaries;
  return {
    ...dictionaries,
    getBreedsByAnimal: getBreedsByAnimal(state)
  };
};

export default connect(mapStateToProps, {})(CreatePost);