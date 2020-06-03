import React, { useState } from 'react';
import { StyleSheet, Text } from "react-native";
import { Container, Content, Form, View, Button } from 'native-base';
import { Animal, Color } from '../../enum/Form';
import AnimalsSelectWidgets from '../widgets/AnimalsSelectWidgets';
import AgeWidget from '../widgets/AgeWidget';
import ColorWidget from '../widgets/ColorWidget';

interface ISearchStateForm {
  animal?: Animal,
  ages?: {
    from: number,
    to: number
  },
  colors?: Color[]
}

const Search: React.FC = () => {
  const [data, setData] = useState<ISearchStateForm>({
    animal: Animal.dog,
    ages: {
      from: 0,
      to: 9
    },
    colors: []
  });

  let {
    animal,
    ages,
    colors
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
                <ColorWidget
                  onChange={(colors) => setData({...data, colors}) }
                  value={colors}
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
    paddingBottom: 0,
    // borderColor: '#eff0f1',
    // borderStyle: 'solid',
    // borderBottomWidth: 1
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

export default Search;