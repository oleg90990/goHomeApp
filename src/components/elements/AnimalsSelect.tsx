import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import { View } from 'native-base';

import { connect } from 'react-redux';
import { IStateDictionariesReducer } from '../../store/dictionaries';
import { IState } from '../../store/types';

interface IAnimalState extends IStateDictionariesReducer {
  value?: number;
  onChange: (id?: number) => void;
}

const AnimalsSelect: React.FC<IAnimalState> = (props) => {
  function getImageStyle(id: number) {
    return {
      opacity: props.value === id ? 1 : 0.5,
    };
  }

  return (
      <View style={styles.Options}>
        {(
          props.dictionaries.animals.map(animal => {
            return <TouchableNativeFeedback key={animal.title} onPress={() => props.onChange(animal.id)}>
              <Image source={{ uri: animal.img }} style={[styles.Image, getImageStyle(animal.id)]} />
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
    height: 47,
    width: 60,
    marginRight: 20,
  }
});

const mapStateToProps = ({ dictionaries }: IState) => {
  return dictionaries;
};

export default connect(mapStateToProps, {})(AnimalsSelect);