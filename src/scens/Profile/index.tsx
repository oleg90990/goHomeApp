import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import { IProfileProps } from "./types";
import { Text, Content } from 'native-base';
import Profile from '../../components/forms/Profile';

const Account: React.FC<IProfileProps> = props => {
  return (
    <Content padder>
      <Profile />
    </Content>
  );
};

// styles
const styles = StyleSheet.create({
});

export default Account;