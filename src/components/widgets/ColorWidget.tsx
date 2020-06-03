import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableNativeFeedback } from "react-native";
import { Label, View, Card, CardItem, Body } from 'native-base';
import { Color, ColorTitle } from '../../enum/Form';

interface IColorWidgetsState {
  value?: Color[],
  onChange?: (value: Color[]) => void
}

const ColorWidget: React.FC<IColorWidgetsState> = (props) => {
    let [
        value,
        setValue
    ] = useState<Color[]>(props.value ? props.value : []);

    useEffect(() => {
        console.log(value)
        if (props.onChange) {
            props.onChange(value)
        }
    }, [value]);

    function fetchValue(color: Color) {
        const index = value.indexOf(color);

        if (index > -1) {
            value.splice(index, 1);
        } else {
            value.push(color);
        }

        setValue([...value])
    }

    function getSelectedStyle(color: Color) {
        return {
          opacity: value.indexOf(color) > -1 ? 1 : 0.5,
          borderColor: value.indexOf(color) > -1 ? '#4050b4' : '#eee'
        };
    } 

    return (
        <Card>
            <CardItem header>
                <Label style={styles.Title}>
                    { `Рассцевтка: ${value.map(color => ColorTitle[color]).join(', ') }` }
                </Label>
            </CardItem>
            <CardItem>
                <Body style={styles.Colors}>
                    {( Object.keys(Color).map((color: any, index) => {
                        return <TouchableNativeFeedback key={index} onPress={() => fetchValue(color)}>
                            <View key={index} style={[styles.ColorContainer, getSelectedStyle(color)]}>
                                <View key={index} style={[styles.Color, { backgroundColor: color }]}>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    }))}
                </Body>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18
  },
  ColorContainer: {
    padding: 2,
    borderWidth: 2,
    borderColor: '#eee',
    marginRight: 10,
  },
  Color: {
    width: 40,
    height: 40,
  },
  Colors: {
    flexDirection: 'row'
  }
});

export default ColorWidget;