import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Form, View, Button, Text } from 'native-base';
import { toItems } from '../../utilites/appNavigation';

import AnimalsSelectWidget from '../widgets/AnimalsSelectWidget';
import ColorWidget from '../widgets/ColorWidget';
import AgeWidget from '../widgets/AgeWidget';
import BreedsWidget from '../widgets/BreedsWidget';

import { connect } from 'react-redux';
import { setAges, setAnimal, setColors, addBreed, removeBreed  } from '../../store/searchForm/actions';
import { IStateSearchFormReducer, AgeState } from '../../store/searchForm';
import { IState } from '../../store/types';

interface IProps extends IStateSearchFormReducer {
  setAnimal(id?: number): any;
  setColors(colors: number[]): any;
  setAges(age: AgeState): any;
  addBreed(id: number): any;
  removeBreed(id: number): any;
}

const Search: React.FC<IProps> = ({
    animal, setAnimal,
    ages, setAges,
    colors, setColors,
    breeds, addBreed, removeBreed
  }) => {
    return (
      <Form>
        <View style={styles.Item}>
            <AnimalsSelectWidget
              value={animal}
              onChange={setAnimal}
            />
        </View>
        <View style={styles.Item}>
            <BreedsWidget
              animal={animal}
              addBreed={addBreed}
              removeBreed={removeBreed}
              value={breeds}
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
  removeBreed
})(Search);