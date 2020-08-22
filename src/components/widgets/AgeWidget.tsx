import React from 'react';
import { StyleSheet } from "react-native";
import { Label, View, Card, CardItem, Body, Text } from 'native-base';
import { AgeState } from 'friendshome-api';
import AgeSelect from '../../components/elements/AgeSelect';

interface IAgesWidgetsProps {
    value: AgeState,
    onChange: (value: AgeState) => void
}

const AgeWidget: React.FC<IAgesWidgetsProps> = ({ value, onChange }) => {  
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
                        <AgeSelect 
                            value={value.from}
                            onChange={(from) => onChange({...value, from})}
                            to={value.to}
                        />
                        <Text style={styles.PickerTitle}>
                            До
                        </Text>
                        <AgeSelect 
                            value={value.to}
                            onChange={(to) => onChange({...value, to})}
                            from={value.from}
                        />
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