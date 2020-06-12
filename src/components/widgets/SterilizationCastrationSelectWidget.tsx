import React from 'react';
import { StyleSheet } from "react-native";
import { Label, Card, CardItem, Body, View } from 'native-base';
import { YesNo } from '../../enum/Form';
import SterilizationCastrationSelect from '../../components/elements/SterilizationCastrationSelect';

interface ISterilizationCastrationSelectWidgetProps {
    value: YesNo,
    onChange: (value: YesNo) => void
}

const GenderSelectWidget: React.FC<ISterilizationCastrationSelectWidgetProps> = ({ value, onChange }) => {  
    return (<Card>
            <CardItem header>
                <Label style={styles.Title}>
                    { `Стирилизация/Кастрация` }
                </Label>
            </CardItem>
            <CardItem>
                <SterilizationCastrationSelect
                    value={value}
                    onChange={onChange}
                />
            </CardItem>
        </Card>);
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18
  }
});

export default GenderSelectWidget;