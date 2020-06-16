import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Label, Card, CardItem, Body, Text, Icon } from 'native-base';
import BreedSelect from '../elements/BreedSelect';

import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { IStateDictionariesReducer } from '../../store/dictionaries';

interface IBreedsWidgetProps extends IStateDictionariesReducer {
  animal: number | undefined,
  value: number[],
  addBreed: (value: number) => void
  removeBreed: (value: number) => void
}

const BreedsWidget: React.FC<IBreedsWidgetProps> = ({ animal, value, addBreed, removeBreed, animals }) => {   
    function getSelectedBreeds() {
        const selectedAnimal = animals
            .find(({ id }) => id === animal);
        
        if (!selectedAnimal) {
            return [];
        }
        
        return value.map(breedId => {
            return selectedAnimal.breeds.find(({id}) => id === breedId);
        });
    }

    return (
        animal ? <Card>
            <CardItem header>
                <Label style={styles.Title}>
                    { `Порода` }
                </Label>
            </CardItem>
                {( value.length === 0 ? 
                    <CardItem style={styles.CardItem} >
                        {( animal ? <Text style={styles.CardItemText}>- Выбрано все -</Text> : null )}
                    </CardItem> : getSelectedBreeds().map((breed, key) => {
                        return breed ? <CardItem key={key} style={styles.CardItem}>
                            <Text style={styles.CardItemText}>
                                { breed.name }
                            </Text>
                            <Icon style={styles.CardItemIcon}
                                name="close"
                                onPress={() => removeBreed(breed.id)}
                            />
                        </CardItem> : null;
                }))}
            <CardItem>
                <Body>
                    <BreedSelect
                        onSelected={addBreed}
                        animal={animal}
                    />
                </Body>
            </CardItem>
        </Card> : null
    );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18
  },
  CardItem: {
      justifyContent: 'space-between'
  },
  CardItemText: {
      fontSize: 14,
      width: '90%',
  },
  CardItemIcon: {
    width: '10%',
    marginLeft: 15
}
});
 
const mapStateToProps = ({ dictionaries }: IState) => {
    return dictionaries;
};
  
export default connect(mapStateToProps, {})(BreedsWidget);