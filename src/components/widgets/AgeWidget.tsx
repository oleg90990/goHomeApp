import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Picker, Label, View, Card, CardItem, Body } from 'native-base';

export interface IAnimalsWidgetvalue {
    from: number,
    to: number
}

interface IAnimalsWidgetsState {
  value?: IAnimalsWidgetvalue,
  onChange?: (value: IAnimalsWidgetvalue) => void
}

const defaultValue: IAnimalsWidgetvalue = { from: 0, to: 5 };

const AgeWidget: React.FC<IAnimalsWidgetsState> = (props) => {
    const { from, to } = props.value ?  props.value : defaultValue;
    
    const [
        value,
        setValue
    ] = useState<IAnimalsWidgetvalue>({ from, to, });

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
                        <Picker
                            note
                            mode="dropdown"
                            style={styles.Picker}
                            selectedValue={value.from}
                            onValueChange={(from) => setValue({...value, from})}
                        >
                            { getOtions(0, value.to) }
                        </Picker>
                        <Picker
                            note
                            mode="dropdown"
                            style={styles.Picker}
                            selectedValue={value.to}
                            onValueChange={(to) => setValue({...value, to})}
                        >
                            { getOtions(value.from, 10) }
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
    width: '50%',
    borderWidth: 2,
    borderColor: '#eee',
  },
  Pickers: {
    flexDirection: 'row',
  }
});

export default AgeWidget;