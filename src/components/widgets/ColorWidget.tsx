import React from 'react';
import { StyleSheet } from "react-native";
import { Label, Card, CardItem, Body } from 'native-base';
import ColorsSelect from '../../components/elements/ColorsSelect';

interface IColorWidgetsState {
  value: number[],
  onChange: (value: number[]) => void
}

const ColorWidget: React.FC<IColorWidgetsState> = ({ value, onChange }) => {
    return (
        <Card>
            <CardItem header>
                <Label style={styles.Title}>
                    { `Рассцевтка` }
                </Label>
            </CardItem>
            <CardItem>
                <Body>
                    <ColorsSelect 
                      value={value}
                      onChange={onChange}
                    />
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

export default ColorWidget;