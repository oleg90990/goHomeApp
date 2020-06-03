import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from "react-native";
import { Container, Content, Form, View, Label, Button } from 'native-base';
import { Animals } from '../../enum/Form';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Action, Scens } from '../../utilites/appNavigation';
import AnimalsSelectWidgets from '../widgets/AnimalsSelectWidgets';
import AgeWidget from '../widgets/AgeWidget';

interface ISearchStateForm {
  animal?: Animals,
  ages?: {
    from: number,
    to: number
  }
}

const Search: React.FC = () => {
  const [data, setData] = useState<ISearchStateForm>({
    animal: undefined,
    ages: undefined
  });

  let {
    animal,
    ages
  } = data;

  function toFind() {
    console.log(data)
    // Action(Scens.items);
  }

  return (
    <Container>
        <Content padder>
            <Form>
              <View style={styles.Item}>
                <AnimalsSelectWidgets
                  onChange={(animal) => setData({...data, animal}) }
                  value={animal}
                />
              </View>
              <View style={styles.Item}>
                <AgeWidget
                  onChange={(ages) => setData({...data, ages}) }
                  value={ages}
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