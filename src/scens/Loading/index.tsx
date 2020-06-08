import React from 'react';
import { View, Spinner } from 'native-base';
import { StyleSheet } from "react-native";
import { ILoadingProps } from "./types";

const Loading: React.FC<ILoadingProps> = (props) => { 
  // console.log('Loading')
  return (
    <View style={styles.Spinner}>
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