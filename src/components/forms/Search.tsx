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
import { IBreedItem } from '../../data/breeds';

interface IProps extends IStateSearchFormReducer {
  setAnimal(animal: Animal): any;
  setColors(colors: Color[]): any;
  setAges(ages: IAgeWidgetvalue): any;
  setBreed(breed: IBreedItem): any;
}

const Search: React.FC<IProps> = (props) => {
  useEffect(() => {
    // console.log(props)
  });

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