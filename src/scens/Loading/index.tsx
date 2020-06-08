import React from 'react';
import { Text } from 'native-base';
import { StyleSheet } from "react-native";
import { ILoadingProps } from "./types";

const Loading: React.FC<ILoadingProps> = (props) => { 
  // console.log('Loading')
  return (
    <Text>
      Loading...
    </Text>
  );
};

const styles = StyleSheet.create({
  Content: {
  }
});

export default Loading;