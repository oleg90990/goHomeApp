import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import { IAccountProps } from "./types";
import { Text } from 'native-base';

const Account: React.FC<IAccountProps> = (props) => {
    return (
      <Text style={styles.Root}>
          { 'Account' }
      </Text>
    );
};

// styles
const styles = StyleSheet.create({
  Root: {
    alignItems: 'center',
    alignSelf: 'center',
    height: 500
  }
});

export default Account;