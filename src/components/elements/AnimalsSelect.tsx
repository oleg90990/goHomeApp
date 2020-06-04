import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import { View } from 'native-base';
import { Animal } from '../../enum/Form';
import Animals, { IAnimalItem } from '../../data/animals';

interface IAnimalState {
  value: Animal,
  onChange: Function
}

const AnimalsSelect: React.FC<IAnimalState> = (props) => {
  const [value, setValue] = useState<Animal>(props.value);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(value)
    }
  }, [value]);

  function getImageStyle(animal: IAnimalItem) {
    return {
      opacity: animal.name === value ? 1 : 0.5,
    };
  }

  return (
      <View style={styles.Options}>
        {(
          Animals.map(animal => {
            return <TouchableNativeFeedback key={animal.name} onPress={() => setValue(animal.name)}>
              <Image source={animal.source} style={[styles.Image, getImageStyle(animal)]} />
            </TouchableNativeFeedback>
          })
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  Options: {
    display: 'flex',
    flexDirection: 'row',
  },
  Image:{
    height: 57,
    width: 70,
    marginRight: 20,
  }
});

export default AnimalsSelect;