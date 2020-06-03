import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableNativeFeedback } from "react-native";
import { Text, Label, View } from 'native-base';
import { Color } from '../../enum/Form';

interface IColorWidgetsState {
  value?: Color[],
  onChange?: (value: Color[]) => void
}

const ColorWidget: React.FC<IColorWidgetsState> = (props) => {
    const [
        value,
        setValue
    ] = useState<Color[]>(props.value ? props.value : []);

    useEffect(() => {
        if (props.onChange) {
            props.onChange(value)
        }
    }, [value]);

    function fetchValue(color: Color) {
        const index = value.indexOf(color);

        if (index > -1) {
            delete value[index];
        } else {
            value.push(color);
        }

        console.log(value)
    }

    function getStyleColor(color: Color) {
        return Object.assign({}, styles.Color, {
            backgroundColor: color
        });
    }

    return (
        <View>
            <Label style={styles.Title}>
                { `Цвет:` }
            </Label>
            <View style={styles.Colors}>
                {( Object.keys(Color).map((color: any) => {
                    return <TouchableNativeFeedback key={color} onPress={() => fetchValue(color)}>
                        <View key={color} style={getStyleColor(color)}>
                        </View>
                    </TouchableNativeFeedback>
                }))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    marginBottom: 10
  },
  Color: {
    width: 30,
    height: 30,
    marginRight: 10,
    padding: 2,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  Colors: {
    flexDirection: 'row'
  }
});

export default ColorWidget;