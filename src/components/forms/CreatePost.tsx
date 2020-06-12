import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { Form, Item, Input, Picker, Label, Textarea, View, Button, Text } from 'native-base';

import ColorsSelect from '../../components/elements/ColorsSelect';
import AgeSelect from '../../components/elements/AgeSelect';
import GenderSelect from '../../components/elements/GenderSelect';
import SterilizationCastrationSelect from '../elements/SterilizationCastrationSelect';
import ImageSelect from '../elements/ImagesSelect';

import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { IStateDictionariesReducer, IDictionaryItem } from '../../store/dictionaries';
import { IStateUserReducer } from '../../store/user';
import { getBreedsByAnimal } from '../../store/dictionaries/getters';
import { Gender, YesNo } from '../../enum/Form';

interface IProps extends IStateDictionariesReducer, IStateUserReducer {
  getBreedsByAnimal: (animal: number) => IDictionaryItem[]
}

const CreatePost: React.FC<IProps> = ({ getBreedsByAnimal, dictionaries, phone }) => {
    const [title, setTitle] = useState('');
    const [animal, setAnimal] = useState(1);
    const [colors, setColors] = useState<number[]>([]);
    const [age, setAge] = useState<number>(1);
    const [breed, setBreed] = useState(0);
    const [phoneinput, setPhone] = useState(phone);
    const [description, setDescription] = useState('');
    const [gender, setGender] = useState<Gender>(Gender.none);
    const [sterilization, setSterilization] = useState<YesNo>(YesNo.none);

    useEffect(() => {
      setBreed(0);
    }, [animal])

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
            Пол
          </Label>
          <GenderSelect
            value={gender}
            onChange={setGender}
            animal={animal}
          />
        </Item>
        <Item style={styles.Item}>
          <Label>
            {(gender === Gender.male ? 'Кастрация' : '')}
            {(gender === Gender.female ? 'Стирилизация' : '')}
            {(gender == Gender.none ? ' Стирилизация/Кастрация' : '')}
          </Label>
          <SterilizationCastrationSelect
            value={sterilization}
            onChange={setSterilization}
          />
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
            value={phoneinput}
            onChangeText={setPhone}
          />
        </Item>
        <View style={styles.ViewItem}>
          <Textarea
            underline
            bordered={false}
            rowSpan={8}
            value={description}
            onChangeText={setDescription}
            placeholder="Описание"
          />
        </View>
        <View style={styles.ViewItem}>
          <ImageSelect />
        </View>
        <View style={styles.ViewItem}>
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
  },
  ViewItem: {
    marginBottom: 20
  }
});

const mapStateToProps = (state: IState) => {
  const dictionaries = state.dictionaries;
  const user = state.user;
  return {
    ...dictionaries,
    ...user,
    getBreedsByAnimal: getBreedsByAnimal(state)
  };
};

export default connect(mapStateToProps, {})(CreatePost);