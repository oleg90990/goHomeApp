import React from 'react';
import { Container, Content, View, List, ListItem, Button, Icon } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, Text, Linking} from "react-native";
import { IItemProps } from "./types";
import { getColorsByIds, getBreedById } from "../../store/dictionaries/getters";

import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { act } from 'react-test-renderer';

const Item: React.FC<IItemProps> = ({
        animal,
        images,
        title,
        age,
        colors,
        breed,
        content,
        phone,
        user,
        user_id,
        active,
        getColorsByIds,
        getBreedById
    }) => {
        const useColors = getColorsByIds(colors);
        const useBreed = getBreedById(breed, animal);
        const isEdit = user.id === user_id;

        function toCall() {
            Linking.openURL(`tel:${phone}`);
        }

        function toEdit() {
            
        }

        function toDisPublish() {
            
        }

        function toEnPublish() {
            
        }

        return (
            <Container>
                <Content>
                    <SliderBox sliderBoxHeight={300} images={images} />
                    <View style={[styles.ViewTitle, styles.View]}>
                        <Text style={styles.Title}>
                            { title }
                        </Text>
                    </View>
                    <Button primary block onPress={toCall} style={styles.BtnCall}>
                        <Text style={styles.Button}>
                            Позвонить
                        </Text>
                    </Button>
                    {(isEdit ? <Button warning block onPress={toEdit} style={styles.BtnEdit}>
                        <Text style={styles.Button}>
                            Редактировать
                        </Text>
                    </Button> : null )}
                    {(isEdit ? 
                    ( active ?  
                        <Button warning block onPress={toDisPublish} style={styles.BtnEdit}>
                            <Text style={styles.Button}>
                                Снять с публикации
                            </Text>
                        </Button> : 
                        <Button warning block onPress={toEnPublish} style={styles.BtnEdit}>
                            <Text style={styles.Button}>
                                Опубликовать
                            </Text>
                        </Button>)
                    : null )}
                    <List style={{ paddingRight: 20 }}>
                        {( useBreed ? 
                        <ListItem>
                            <Text style={[styles.Text, styles.Label]}>
                                { `Порода:` }
                            </Text>
                            <Text style={styles.Text}>
                                { useBreed.title }
                            </Text>
                        </ListItem> : null)}
                        <ListItem>
                            <Text style={[styles.Text, styles.Label]}>
                                { `Возраст:` }
                            </Text>
                            <Text style={styles.Text}>
                                { age }
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text style={[styles.Text, styles.Label]}>
                                { `Цвет:` }
                            </Text>
                            { useColors.map((color, key) => {
                                return <View key={key} style={[styles.Color, { backgroundColor: color.value }]} />
                            })}
                        </ListItem>
                    </List>

                    <View style={[styles.View, styles.Footer]}>
                        <Text style={[styles.Text, styles.Content]}>
                        { content }
                        </Text>
                    </View>
                </Content>
            </Container>
        );
};

const styles = StyleSheet.create({
    Button: {
        color: 'white'
    },
    ViewTitle: {
        marginBottom: -10
    },
    View: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    Color: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    Text: {
        fontSize: 18
    },
    Label: {
        marginRight: 10
    },
    Title: {
        fontSize: 24,
        marginBottom: 0
    },
    ListItem: {
        padding: 0
    },
    Content: {
        marginBottom: 20
    },
    Footer: {
        marginBottom: 15
    },
    BtnCall: {
        margin: 20,
        marginBottom: 10
    },
    BtnEdit: {
        margin: 20,
        marginTop: 0,
        marginBottom: 10
    }
});

const mapStateToProps = (state: IState) => {
    return {
        getColorsByIds: getColorsByIds(state),
        getBreedById: getBreedById(state),
        user: state.user
    };
};

export default connect(mapStateToProps, {})(Item);