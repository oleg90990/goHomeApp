import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Label, Card, CardItem, Body } from 'native-base';
import { Animal } from '../../enum/Form';
import BreedSelect from '../elements/BreedSelect';
import { IBreedItem } from '../../data/breeds';

interface IBreedsWidgetProps {
  animal: Animal,
  value?: IBreedItem,
  onChange: (value: IBreedItem) => void
}

const BreedsWidget: React.FC<IBreedsWidgetProps> = (props) => {
    let [breedTitle, setBreedTitle] = useState('');

    function getTitleFromValue() {
        return setBreedTitle(props.value ? props.value.title : '');
    }
    
    function setInputValue(value: IBreedItem) {
        setBreedTitle(value.title);
        props.onChange(value);
    }

    useEffect(() => {
        getTitleFromValue();
    })
    
    return (
        <Card>
            <CardItem header>
                <Label style={styles.Title}>
                    { `Порода: ${breedTitle}` }
                </Label>
            </CardItem>
            <CardItem>
                <Body>
                    <BreedSelect
                        onSelected={setInputValue}
                        animal={props.animal}
                    />
                </Body>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18
  }
});

export default BreedsWidget;