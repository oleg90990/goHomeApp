import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from "react-native";
import { Container, Content, Form, View, Label, Button } from 'native-base';
import AnimalsSelect from '../elements/AnimalsSelect';
import { Animals, AnimalsTitle } from '../../enum/Form';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Action, Scens } from '../../utilites/appNavigation';

interface ISearchState {
  animal: Animals,
  ages: number[]
}

const Search: React.FC<ISearchState> = (props) => {
  const [animal, setAnimal] = useState<Animals>(props.animal);
  const [ages, setAges] = useState<number[]>(props.ages);

  function toFind() {
    Action(Scens.items, {
      animal,
      ages
    });
  }

  return (
    <Container>
        <Content padder>
            <Form>
              <View style={styles.Item}>
                <Label style={styles.Title}>
                  { `Я ищу: ${ AnimalsTitle[animal] }` }
                </Label>
                <AnimalsSelect onChange={setAnimal} value={animal} />
              </View>
              <View style={styles.Item}>
                <Label style={styles.Title}>
                  { `Возраст: ${ages.join(' - ')} лет` }
                </Label>
                <MultiSlider
                  values={ages}
                  min={0}
                  max={20}
                  onValuesChange={setAges}
                />
              </View>
              <View style={styles.Item}>
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
    marginBottom: 30
  },
  Animal:{
    marginTop: 10
  },
  Btn: {
    justifyContent: 'center',
    marginTop: -10
  },
  ButtonText: {
    color: 'white'
  }, 
});

export default Search;