import React from 'react';
import { StyleSheet } from "react-native";
import { Social } from '../../enum/Social';
import { Text, List, View  } from 'native-base';
import CheckBox from '@react-native-community/checkbox';

interface IColorsSelectProps {
  onChange: (value: Social[]) => void,
  value: Social[],
  prefix: string,
  vk: boolean
}

const SocialSelect: React.FC<IColorsSelectProps> = ({ value, onChange, prefix, vk }) => {
    function onChangeSocial(id: Social) {
        const index = value.indexOf(id);
  
        if (index >= 0) {
            value.splice(index, 1);
        } else {
            value.push(id);
        }
  
        onChange([...value]);
    }

    return (
        <View>
           {vk ? <View style={styles.Checkbox}>
                <CheckBox
                value={value.indexOf(Social.vk) >= 0} 
                onValueChange={() => onChangeSocial(Social.vk)}
                />
                <Text>
                    { `${prefix} в группах vk` }
                </Text>
            </View> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    Checkbox: {
        flexDirection: "row",
        marginLeft: 0,
        display: 'flex',
        alignItems: 'center'
    }
});


export default SocialSelect;