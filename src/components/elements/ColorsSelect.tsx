import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";

import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { IStateDictionariesReducer } from '../../store/dictionaries';

interface IColorsSelectProps extends IStateDictionariesReducer {
  onChange: (value: number[]) => void,
  value: number[]
}

const ColorsSelect: React.FC<IColorsSelectProps> = ({ colors, onChange, value }) => {
    function fetchValue(id: number) {
        const index = value.indexOf(id);

        if (index > -1) {
            value.splice(index, 1);
        } else {
            value.push(id);
        }

        onChange([...value])
    }

    function getSelectedStyle(id: number) {
      const isSelected: boolean = value.indexOf(id) > -1;
        return {
          opacity: isSelected ? 1 : 0.5,
          borderColor: isSelected ? '#4050b4' : '#eee'
        };
    }

    return (
        <View style={styles.Colors}>
            {( colors.map(({ id, value }) => {
                return <TouchableNativeFeedback key={id} onPress={() => fetchValue(id)}>
                    <View style={[styles.ColorContainer, getSelectedStyle(id)]}>
                        <View style={[styles.Color, { backgroundColor: value }]}>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            }))}
        </View>
    );
};

const styles = StyleSheet.create({
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

const mapStateToProps = ({ dictionaries }: IState) => {
    return dictionaries;
};

export default connect(mapStateToProps, {})(ColorsSelect);