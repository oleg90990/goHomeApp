import React from 'react';
import { StyleSheet } from "react-native";
import { Label, View, Card, CardItem, Body, Text } from 'native-base';
import CitySelect from '../elements/CitySelect';
import { ICityItem } from 'friendshome-api';

interface IAgesWidgetsProps {
    value?: ICityItem;
    onChange: (value: ICityItem) => void;
}

const CityWidget: React.FC<IAgesWidgetsProps> = ({ value, onChange }) => {  
    return (
        <Card>
            <CardItem header>
                <Label style={styles.Title}>
                    { `Город` }
                </Label>
            </CardItem>
            <CardItem>
                <Body>
                    <View style={styles.Pickers}>
                        <CitySelect
                            onSelected={onChange}
                            includedRegins={true}
                            value={value}
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

export default CityWidget;