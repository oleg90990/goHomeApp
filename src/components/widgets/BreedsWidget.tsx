import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { Label, Card, CardItem, Body, Text, Icon ,Right} from 'native-base';
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

const BreedsWidget: React.FC<IBreedsWidgetProps> = ({ animal, value, addBreed, removeBreed, dictionaries }) => {   
    function getSelectedBreeds() {
        const selectedAnimal = dictionaries
            .animals
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
                        {( animal ? <Text>- Выбрано все -</Text> : null )}
                    </CardItem> : getSelectedBreeds().map((breed, key) => {
                        return breed ? <CardItem key={key} style={styles.CardItem}>
                            <Text>{ breed.title }</Text>
                            <Icon
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
      width: '100%',
      justifyContent: 'space-between'
  }
});
 
const mapStateToProps = ({ dictionaries }: IState) => {
    return dictionaries;
};
  
export default connect(mapStateToProps, {})(BreedsWidget);