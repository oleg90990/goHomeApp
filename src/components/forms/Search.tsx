import React, { useState } from 'react';
import { StyleSheet, Text } from "react-native";
import { Container, Content, Form, View, Button } from 'native-base';
import { Animal, Color } from '../../enum/Form';
import AnimalsSelectWidgets from '../widgets/AnimalsSelectWidgets';
import { toItems } from '../../utilites/appNavigation'

import ColorWidget from '../widgets/ColorWidget';
import AgeWidget, { IAgeWidgetvalue } from '../widgets/AgeWidget';
import BreedsWidget from '../widgets/BreedsWidget';

import { connect } from 'react-redux';
import { setAges, setAnimal, setColors, setBreed  } from '../../store/searchFormReducer/actions';
import { IStateSearchFormReducer } from '../../store/searchFormReducer';
import { IState } from '../../store/types';
import { IBreedItem } from '../../data/breeds';

interface IProps extends IStateSearchFormReducer {
  setAnimal(animal: Animal): any;
  setColors(colors: Color[]): any;
  setAges(ages: IAgeWidgetvalue): any;
  setBreed(breed: IBreedItem): any;
}

const Search: React.FC<IProps> = (props) => {
  function toFind() {
    console.log(props.breed)
    // toItems(data);
    // props.setText('dddd')
  }

  return (
    <Container>
        <Content padder>
            <Form>
              <View style={styles.Item}>
                <AnimalsSelectWidgets
                  value={props.animal}
                  onChange={props.setAnimal}
                />
              </View>
              <View style={styles.Item}>
                <BreedsWidget
                  animal={props.animal}
                  onChange={props.setBreed}
                  value={props.breed}
                />
              </View>
              <View style={styles.Item}>
                <AgeWidget
                  value={props.ages}
                  onChange={props.setAges}
                />
              </View>
              <View style={styles.Item}>
                <ColorWidget
                  value={props.colors}
                  onChange={props.setColors}
                />
              </View>
              <View style={styles.ItemBtn}>
                <Button style={styles.Btn} onPress={toFind}>
                  <Text style={styles.ButtonText}>Найти</Text>
                </Button>
              </View>
            </Form>
        </Content>
    </Container>
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
  },
  ItemBtn: {
    marginTop: 5
  },
  Btn: {
    justifyContent: 'center'
  },
  ButtonText: {
    color: 'white'
  }, 
});

const mapStateToProps = ({ searchForm }: IState) => {
  return searchForm;
};

export default connect(mapStateToProps, {
  setAges,
  setAnimal,
  setColors,
  setBreed
})(Search);