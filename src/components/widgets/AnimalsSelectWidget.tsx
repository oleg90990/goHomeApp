import React, { useState} from 'react';
import { StyleSheet } from "react-native";
import { Label, Card, CardItem, Body } from 'native-base';
import AnimalsSelect from '../elements/AnimalsSelect';

interface IAnimalsWidgetsState {
  value?: number;
  onChange: (id?: number) => void;
}

const AnimalsSelectWidget: React.FC<IAnimalsWidgetsState> = ({ value, onChange }) => {
  return (
    <Card>
        <CardItem header>
            <Label style={styles.Title}>
            { `Я ищу` }
            </Label>
        </CardItem>
        <CardItem>
            <Body>
              <AnimalsSelect onChange={onChange} value={value} />
            </Body>
        </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18
  }
});

export default AnimalsSelectWidget;