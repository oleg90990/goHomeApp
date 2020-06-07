import React, { useState } from 'react';
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
    let [breedTitle, setBreedTitle] = useState(props.value ? props.value.title : '');

    function onChange(item: IBreedItem) {
        props.onChange(item);
        setBreedTitle(item.title);
    }
    
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
                        onSelected={item => onChange(item)}
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