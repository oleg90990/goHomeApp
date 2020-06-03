import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import Layout from "../components/layout/Index";
import { Text } from 'native-base';

const Account: React.FC = (props) => {
    const text: string = 'Account';

    return (
      <Text style={styles.Root}>
          { text }
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