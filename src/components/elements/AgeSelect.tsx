import React from 'react';
import { StyleSheet } from "react-native";
import { Picker} from 'native-base';

interface IAgeSelectProps  {
  onChange: (value: number) => void,
  value: number,
  from?: number,
  to?: number
}

const AgeSelect: React.FC<IAgeSelectProps> = ({ onChange, value, from, to }) => {
    function getOtions() {
        let options = [];

        for (let index = (from ? from : 0); index <= (to ? to : 20); index++) {
            options.push(<Picker.Item key={index} label={index.toString()} value={index} />)
        }

        return options;
    }

    return (
        <Picker note mode="dropdown" selectedValue={value} onValueChange={(onChange)} >
            { getOtions() }
        </Picker>
    );
};

export default AgeSelect;