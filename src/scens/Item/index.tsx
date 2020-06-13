import React from 'react';
import { Left, Body, Content, View, List, ListItem, Button, Icon } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, Text } from "react-native";
import { IItemProps } from "./types";
import { getColorsByIds, getBreedById, getAnimalById } from "../../store/dictionaries/getters";
import Actions from './components/Actions';
import { getLabelSterilization, getLabelYesNo } from '../../helpers/Labels';

import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { YesNo } from 'src/enum/Form';

const Item: React.FC<IItemProps> = ({
        animal,
        images,
        title,
        age,
        colors,
        breed,
        content,
        user_id,
        phone,
        active,
        gender,
        sterilization,
        getColorsByIds,
        getBreedById,
        getAnimalById
    }) => {
        const useColors = getColorsByIds(colors);
        const useBreed = getBreedById(breed, animal);
        const useAnimal = getAnimalById(animal);

        return (
            <Content>
                <SliderBox sliderBoxHeight={300} images={images} />
                <View padder>
                    <Actions phone={ phone } user_id={user_id} active={active} />

                    <Text style={styles.Title}>
                        { title }
                    </Text>

                    <List style={{ marginLeft: -20 }}>
                        {( useBreed ? 
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    Порода:
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.Text}>
                                    { useBreed.title }
                                </Text>
                            </Body>
                        </ListItem> : null)}
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    Возраст:
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.Text}>
                                    { age }
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    Пол:
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.Text}>
                                    { useAnimal ? useAnimal.genders[gender] : 'Неизвестно' }
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    { getLabelSterilization(gender) }:
                                </Text>
                            </Left>
                            <Body>
                                <Text style={styles.Text}>
                                    { getLabelYesNo(sterilization) }
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.Text}>
                                    Цвет:
                                </Text>
                            </Left>
                            <Body>
                                <View style={styles.Colors}>
                                    { useColors.map((color, key) => {
                                        return <View key={key} style={[styles.Color, { backgroundColor: color.value }]} />
                                    })}
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text style={styles.Text}>
                                    { content }
                                </Text>
                            </Body>
                        </ListItem>
                    </List>
                </View>
            </Content>
        );
};

const styles = StyleSheet.create({
    Title: {
        fontSize: 24
    },
    Colors: {
        display: 'flex',
        flexDirection: 'row'
    },
    Color: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    Text: {
        fontSize: 16
    }
});

const mapStateToProps = (state: IState) => {
    return {
        getColorsByIds: getColorsByIds(state),
        getBreedById: getBreedById(state),
        getAnimalById: getAnimalById(state)
    };
};

export default connect(mapStateToProps, {})(Item);