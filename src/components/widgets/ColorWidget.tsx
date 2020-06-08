import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableNativeFeedback } from "react-native";
import { Label, View, Card, CardItem, Body } from 'native-base';

import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { IStateDictionariesReducer } from '../../store/dictionaries';

interface IColorWidgetsState extends IStateDictionariesReducer {
  value: number[],
  onChange: (value: number[]) => void
}

const ColorWidget: React.FC<IColorWidgetsState> = ({ value, onChange, dictionaries }) => {
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
        return {
          opacity: value.indexOf(id) > -1 ? 1 : 0.5,
          borderColor: value.indexOf(id) > -1 ? '#4050b4' : '#eee'
        };
    } 

    return (
        <Card>
            <CardItem header>
                <Label style={styles.Title}>
                    { `Рассцевтка` }
                </Label>
            </CardItem>
            <CardItem>
                <Body style={styles.Colors}>
                    {( dictionaries.colors.map(({ id, value }) => {
                        return <TouchableNativeFeedback key={id} onPress={() => fetchValue(id)}>
                            <View style={[styles.ColorContainer, getSelectedStyle(id)]}>
                                <View style={[styles.Color, { backgroundColor: value }]}>
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

const mapStateToProps = ({ dictionaries }: IState) => {
  return dictionaries;
};
  
export default connect(mapStateToProps, {})(ColorWidget);