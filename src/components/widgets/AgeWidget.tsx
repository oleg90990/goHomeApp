import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Picker, Label, View, Card, CardItem, Body, Text } from 'native-base';
import { AgeState } from '../../store/searchForm';

interface IAgesWidgetsProps {
    value: AgeState,
    onChange: (value: AgeState) => void
}

const AgeWidget: React.FC<IAgesWidgetsProps> = ({ value, onChange }) => {  
    function getOtions(from: number, to: number) {
        let options = [];

        for (let index = from; index <= to; index++) {
            options.push(<Picker.Item key={index} label={index.toString()} value={index} />)
        }

        return options;
    }

    return (
        <Card>
            <CardItem header>
                <Label style={styles.Title}>
                    { `Возраст` }
                </Label>
            </CardItem>
            <CardItem>
                <Body>
                    <View style={styles.Pickers}>
                        <Text style={styles.PickerTitle}>
                            От
                        </Text>
                        <Picker
                            note
                            mode="dropdown"
                            style={styles.Picker}
                            selectedValue={value.from}
                            onValueChange={(from) => onChange({...value, from})}
                        >
                            { getOtions(0, value.to) }
                        </Picker>
                        <Text style={styles.PickerTitle}>
                            До
                        </Text>
                        <Picker
                            note
                            mode="dropdown"
                            style={styles.Picker}
                            selectedValue={value.to}
                            onValueChange={(to) => onChange({...value, to})}
                        >
                            { getOtions(value.from, 20) }
                        </Picker>
                    </View>
                </Body>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18
  },
  Picker: {
    width: 100,
    borderWidth: 2,
    borderColor: '#eee',
  },
  Pickers: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  PickerTitle: {
    marginRight: 10
  }
});

export default AgeWidget;