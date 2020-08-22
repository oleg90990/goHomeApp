import React from 'react';
import { StyleSheet } from "react-native";
import { Label, Card, CardItem, Body, View } from 'native-base';
import { Gender } from 'friendshome-api';
import GenderSelect from '../../components/elements/GenderSelect';

interface IAgesWidgetsProps {
    value: Gender,
    onChange: (value: Gender) => void,
    animal?: number
}

const GenderSelectWidget: React.FC<IAgesWidgetsProps> = ({ value, onChange, animal }) => {  
    return (
        animal ?<Card>
            <CardItem header>
                <Label style={styles.Title}>
                    { `Пол` }
                </Label>
            </CardItem>
            <CardItem>
                <GenderSelect
                    value={value}
                    onChange={onChange}
                    animal={animal}
                />
            </CardItem>
        </Card> : null
    );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18
  }
});

export default GenderSelectWidget;