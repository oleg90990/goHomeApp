import React from 'react';
import { View, Spinner, Text } from 'native-base';
import { StyleSheet } from "react-native";
import { ILoadingProps } from "./types";

const Loading: React.FC<ILoadingProps> = (props) => { 
  return (
    <View style={styles.Spinner}>
      <Text>Настя обещала тут сделать картинку</Text>
      <Spinner />
    </View>
  );
};

const styles = StyleSheet.create({
  Spinner: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Loading;