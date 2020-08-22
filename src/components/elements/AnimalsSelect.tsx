import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import { View } from 'native-base';

import { connect } from 'react-redux';
import { IStateDictionaries } from 'friendshome-api';
import { IState } from '../../store/types';

interface IAnimalState extends IStateDictionaries {
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
          props.animals.map(({ name, id, img }) => {
            return <TouchableNativeFeedback key={name} onPress={() => props.onChange(id)}>
              <Image source={{ uri: img }} style={[styles.Image, getImageStyle(id)]} />
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