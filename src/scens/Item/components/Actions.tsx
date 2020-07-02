import React from 'react';
import { View, Button } from 'native-base';
import { StyleSheet, Text, Linking } from "react-native";

import { IUser } from "../../../store/user";

import { connect } from 'react-redux';
import { IItem } from "../types";
import { IState } from '../../../store/types';

interface IActionsProps {
    user_id: number
    active: boolean
    user: IUser
    toPublish: (active: boolean) => void
    toEdit: () => void
    toCall: () => void
}

const Actions: React.FC<IActionsProps> = ({ user, active, user_id, toPublish, toEdit, toCall }) => {
        const isEdit = user.id === user_id;

        return (
            <View>
                { active ? <Button primary block onPress={toCall} style={styles.BtnEdit}>
                    <Text style={styles.Button}>
                        Позвонить
                    </Text>
                </Button> : null }
                {(isEdit && active ? <Button warning block onPress={toEdit} style={styles.BtnEdit}>
                    <Text style={styles.Button}>
                        Редактировать
                    </Text>
                </Button> : null )}
                {(isEdit ? 
                ( active ?  
                    <Button warning block onPress={() => toPublish(false)} style={styles.BtnEdit}>
                        <Text style={styles.Button}>
                            Снять с публикации
                        </Text>
                    </Button> : 
                    <Button warning block style={styles.BtnEdit} disabled={!active}>
                        <Text style={styles.Button}>
                            Объявление не активно
                        </Text>
                    </Button>)
                : null )}
            </View>
        );
};

const styles = StyleSheet.create({
    BtnEdit: {
        marginBottom: 10
    },
    Button: {
        color: 'white'
    },
});

const mapStateToProps = ({ user: { user }}: IState) => {
    return { user };
  };

export default connect(mapStateToProps, {})(Actions);