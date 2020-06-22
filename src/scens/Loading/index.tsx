import React from 'react';
import { View } from 'native-base';
import { StyleSheet, Image } from "react-native";
import { ILoadingProps } from "./types";

const Loading: React.FC<ILoadingProps> = (props) => { 
  return (
    <View style={styles.Spinner}>
      <Image source={require(`../../assets/home.png`)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  Spinner: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3FB56F'
  }
});

export default Loading;