import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { View, Label } from 'native-base';
import AnimalsSelect from '../elements/AnimalsSelect';
import { Animals, AnimalsTitle } from '../../enum/Form';

interface IAnimalsWidgetsState {
  value?: Animals,
  onChange?: (value: Animals) => void
}

const AnimalsSelectWidgets: React.FC<IAnimalsWidgetsState> = (props) => {
  const [
    value,
    setAnimal
  ] = useState<Animals | undefined>(props.value);

  useEffect(() => {
    if (props.onChange && value !== undefined) {
      props.onChange(value)
    }
  }, [value]);

  return (
    <View>
      <Label style={styles.Title}>
          { `Я ищу: ${ value ? AnimalsTitle[value] : ''}` }
      </Label>
      <AnimalsSelect onChange={setAnimal} value={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default AnimalsSelectWidgets;