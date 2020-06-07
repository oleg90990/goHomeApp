import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Picker, Label, View, Card, CardItem, Body, Text } from 'native-base';

export interface IAgeWidgetvalue {
    from: number;
    to: number;
}

interface IAgesWidgetsProps {
    value: IAgeWidgetvalue,
    onChange: (value: IAgeWidgetvalue) => void
}

const AgeWidget: React.FC<IAgesWidgetsProps> = (props) => {
    const { from, to } = props.value;
    
    const [
        value,
        setValue
    ] = useState<IAgeWidgetvalue>({
        from, to
    });

    useEffect(() => {
        if (props.onChange) {
            props.onChange(value)
        }
    }, [value]);

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
                    { `Возраст: ${value.from} - ${value.to} лет` }
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
                            onValueChange={(from) => setValue({...value, from})}
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
                            onValueChange={(to) => setValue({...value, to})}
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