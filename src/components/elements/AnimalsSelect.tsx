import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import { View, Text } from 'native-base';
import { Animal } from '../../enum/Form';

interface IAnimalState {
  value?: Animal,
  onChange?: Function
}

interface IAnimalItem {
    source: any;
    name: Animal;
}

const AnimalsSelect: React.FC<IAnimalState> = (props) => {
  const [
    value, setValue
  ] = useState<string>(props.value ? props.value : '' )

  const animals: IAnimalItem[] = [
      {
          source: require('~/../../assets/img/animals/cat.png'),
          name: Animal.cat
      },
      {
          source: require('~/../../assets/img/animals/dog.png'),
          name: Animal.dog
      }
  ];

  useEffect(() => {
    if (props.onChange) {
      props.onChange(value)
    }
  }, [value]);

  function getImageStyle(animal: IAnimalItem) {
    let imageStyles = Object.assign({}, styles.Image);

    if (animal.name === value) {
      imageStyles = Object.assign(imageStyles, {
        opacity: 1
      });
    }

    return imageStyles;
  }

  return (
      <View style={styles.Options}>
        {(
          animals.map(animal => {
            return <TouchableNativeFeedback key={animal.name} onPress={() => setValue(animal.name)}>
              <Image source={animal.source} style={getImageStyle(animal)} />
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
    opacity: 0.5,
    height: 73,
    width: 90,
    marginRight: 20,
  }
});

export default AnimalsSelect;