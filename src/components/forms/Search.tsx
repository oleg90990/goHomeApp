import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Form, View, Button, Text } from 'native-base';
import { toItems } from '../../utilites/appNavigation';

import AnimalsSelectWidget from '../widgets/AnimalsSelectWidget';
import ColorWidget from '../widgets/ColorWidget';
import AgeWidget from '../widgets/AgeWidget';
import BreedsWidget from '../widgets/BreedsWidget';
import GenderSelectWidget from '../widgets/GenderSelectWidget';
import SterilizationCastrationSelectWidget from '../widgets/SterilizationCastrationSelectWidget';
import CityWidget from '../widgets/CityWidget';

import { connect } from 'react-redux';
import { setAges, setAnimal, setColors, addBreed, removeBreed, setGender, setSterilization, setCity } from '../../store/searchForm/actions';
import { IStateSearchFormReducer, AgeState } from '../../store/searchForm';
import { IState } from '../../store/types';
import { Gender , YesNo} from 'src/enum/Form';
import { ICityItem } from '../../api/apiDictionaries';

interface IProps extends IStateSearchFormReducer {
  setAnimal(id?: number): any;
  setColors(colors: number[]): any;
  setAges(age: AgeState): any;
  addBreed(id: number): any;
  removeBreed(id: number): any;
  setGender(gender: Gender): any;
  setSterilization(value: YesNo): any;
  setCity(city: ICityItem): any;
}

const Search: React.FC<IProps> = ({
    animal, setAnimal,
    ages, setAges,
    colors, setColors,
    breeds, addBreed, removeBreed,
    gender, setGender,
    sterilization, setSterilization,
    city, setCity
  }) => {
    return (
      <Form>
        <View style={styles.Item}>
            <CityWidget
              value={city}
              onChange={setCity}
            />
        </View>
        <View style={styles.Item}>
            <AnimalsSelectWidget
              value={animal}
              onChange={setAnimal}
            />
        </View>
        {( animal ? <View style={styles.Item}>
            <BreedsWidget
              animal={animal}
              addBreed={addBreed}
              removeBreed={removeBreed}
              value={breeds}
            />
        </View> : null )}
        <View style={styles.Item}>
          <GenderSelectWidget
            value={gender}
            onChange={setGender}
            animal={animal}
          />
        </View>
        <View style={styles.Item}>
          <SterilizationCastrationSelectWidget
            value={sterilization}
            onChange={setSterilization}
            gender={gender}
          />
        </View>
        <View style={styles.Item}>
          <AgeWidget
            value={ages}
            onChange={setAges}
          />
        </View>
        <View style={styles.Item}>
          <ColorWidget
            value={colors}
            onChange={setColors}
          />
        </View>
        <View style={[styles.Item, { marginTop: 5 }]}>
          <Button block primary onPress={() => toItems()}>
            <Text>Поиск друзей</Text>
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
  Item: {
    marginBottom: 5,
    paddingBottom: 0
  },
  Animal:{
    marginTop: 10
  }
});

const mapStateToProps = ({ searchForm }: IState) => {
  return searchForm;
};

export default connect(mapStateToProps, {
  setAges,
  setAnimal,
  setColors,
  addBreed,
  removeBreed,
  setGender,
  setSterilization,
  setCity
})(Search);