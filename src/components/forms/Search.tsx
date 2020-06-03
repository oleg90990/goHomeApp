import React, { useState } from 'react';
import { StyleSheet, Text } from "react-native";
import { Container, Content, Form, View, Button } from 'native-base';
import { Animal } from '../../enum/Form';
import AnimalsSelectWidgets from '../widgets/AnimalsSelectWidgets';
import { toItems } from '../../utilites/appNavigation'
import { IItemsState } from '../../scens/Items';

import ColorWidget from '../widgets/ColorWidget';
import AgeWidget, { IAgeWidgetvalue } from '../widgets/AgeWidget';

const Search: React.FC = () => {
  const [data, setData] = useState<IItemsState>({
    animal: Animal.dog,
    ages: {
      from: 1,
      to: 3
    },
    colors: []
  });

  let {
    animal,
    ages,
    colors
  } = data;

  function toFind() {
    toItems(data);
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

export default Search;