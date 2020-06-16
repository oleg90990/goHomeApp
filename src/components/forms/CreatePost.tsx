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
import { IUser } from '../../store/user';
import { getBreedsByAnimal } from '../../store/dictionaries/getters';
import { Gender, YesNo } from '../../enum/Form';
import { getLabelSterilization } from '../../helpers/Labels';

interface IProps extends IStateDictionariesReducer, IUser {
  getBreedsByAnimal: (animal: number) => IDictionaryItem[]
}

const CreatePost: React.FC<IProps> = ({ getBreedsByAnimal, animals }) => {
    const [title, setTitle] = useState('');
    const [animal, setAnimal] = useState(1);
    const [colors, setColors] = useState<number[]>([]);
    const [age, setAge] = useState<number>(1);
    const [breed, setBreed] = useState(0);
    const [phoneinput, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [gender, setGender] = useState<Gender>(Gender.none);
    const [sterilization, setSterilization] = useState<YesNo>(YesNo.none);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
      setBreed(0);
    }, [animal])

    function onSave() {
    }

    return (
      <Form>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Заголовок
          </Label>
          <Input
            value={title}
            onChangeText={setTitle}
          />
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Животное
          </Label>
          <Picker
            style={{width: '100%'}}
            mode="dropdown"
            onValueChange={setAnimal}
            selectedValue={animal}
          >
            {( animals.map(({ id, name }, index) => {
              return <Picker.Item label={name} value={id} key={index} />;
            }) )}
          </Picker>
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Порода
          </Label>
          <Picker style={{width: '100%'}} onValueChange={setBreed} selectedValue={breed} >
            { getBreedsByAnimal(animal).map(({name, id}, index) => {
              return <Picker.Item key={index} label={name} value={id} />
            })}
          </Picker>
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Пол
          </Label>
          <GenderSelect
            value={gender}
            onChange={setGender}
            animal={animal}
          />
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
             { getLabelSterilization(gender) }
          </Label>
          <SterilizationCastrationSelect
            value={sterilization}
            onChange={setSterilization}
          />
        </Item>
        <Item stackedLabel style={styles.Item}>
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
        <Item stackedLabel style={styles.Item}>
          <Label>
            Возраст
          </Label>
          <AgeSelect
            style={{width: '100%'}}
            value={age}
            onChange={setAge}
          />
        </Item>
        <Item stackedLabel style={styles.Item}>
          <Label>
            Телефон
          </Label>
          <Input
            value={phoneinput}
            onChangeText={setPhone}
          />
        </Item>
        <Item style={[styles.Item, styles.ViewItem]}>
          <Textarea
            underline
            bordered={false}
            rowSpan={8}
            value={description}
            onChangeText={setDescription}
            style={{width: '100%'}}
            placeholder="Описание"
          />
        </Item>
        <View style={styles.ViewItem}>
          <ImageSelect value={images} onChange={setImages} />
        </View>
        <View style={styles.ViewItem}>
          <Button block primary onPress={onSave}>
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
    margin: 15,
    paddingLeft: 10,
    display: 'flex',
    width: '100%'
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
  const user = state.user.user;
  return {
    ...dictionaries,
    ...user,
    getBreedsByAnimal: getBreedsByAnimal(state)
  };
};

export default connect(mapStateToProps, {})(CreatePost);