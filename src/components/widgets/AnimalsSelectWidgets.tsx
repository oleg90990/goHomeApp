import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Label, Card, CardItem, Body } from 'native-base';
import AnimalsSelect from '../elements/AnimalsSelect';
import { Animal, AnimalTitle } from '../../enum/Form';

interface IAnimalsWidgetsState {
  value?: Animal,
  onChange?: (value: Animal) => void
}

const AnimalsSelectWidgets: React.FC<IAnimalsWidgetsState> = (props) => {
  const [
    value,
    setAnimal
  ] = useState<Animal>(props.value ? props.value : Animal.cat);

  useEffect(() => {
    if (props.onChange && value !== undefined) {
      props.onChange(value)
    }
  }, [value]);

  return (
    <Card>
        <CardItem header>
            <Label style={styles.Title}>
            { `Я ищу: ${AnimalTitle[value]}` }
            </Label>
        </CardItem>
        <CardItem>
            <Body>
              <AnimalsSelect onChange={setAnimal} value={value} />
            </Body>
        </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18
  }
});

export default AnimalsSelectWidgets;