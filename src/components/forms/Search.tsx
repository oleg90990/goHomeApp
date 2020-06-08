import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Container, Content, Form, View } from 'native-base';
import { Animal, Color } from '../../enum/Form';
import AnimalsSelectWidgets from '../widgets/AnimalsSelectWidgets';

import ColorWidget from '../widgets/ColorWidget';
import AgeWidget, { IAgeWidgetvalue } from '../widgets/AgeWidget';
import BreedsWidget from '../widgets/BreedsWidget';

import { connect } from 'react-redux';
import { setAges, setAnimal, setColors, setBreed  } from '../../store/searchFormReducer/actions';
import { IStateSearchFormReducer } from '../../store/searchFormReducer';
import { IState } from '../../store/types';

interface IProps extends IStateSearchFormReducer {
  setAnimal(animal: Animal): any;
  setColors(colors: Color[]): any;
  setAges(ages: IAgeWidgetvalue): any;
  setBreed(breed: IBreedItem): any;
}

const Search: React.FC<IProps> = (props) => {
  return (
    <Container>
        <Content padder>
            <Form></Form>
          
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
  }
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