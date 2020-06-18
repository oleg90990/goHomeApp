import React from 'react';
import { View, Button } from 'native-base';
import { StyleSheet, Text, Linking } from "react-native";

import { IUser } from "../../../store/user";

import { connect } from 'react-redux';
import { IItem } from "../types";
import { IState } from '../../../store/types';

interface IActionsProps {
    phone: string,
    user_id: number,
    active: boolean,
    user: IUser,
    toDisPublish: (active: boolean) => void

}

const Actions: React.FC<IActionsProps> = ({ user, phone, active, user_id, toDisPublish }) => {
        const isEdit = user.id === user_id;

        function toCall() {
            Linking.openURL(`tel:${phone}`);
        }

        function toEdit() {
            
        }

        function publish(active: boolean) {
            toDisPublish(active);
        }

        return (
            <View>
                <Button primary block onPress={toCall} style={styles.BtnEdit}>
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
                    <Button warning block onPress={() => publish(false)} style={styles.BtnEdit}>
                        <Text style={styles.Button}>
                            Снять с публикации
                        </Text>
                    </Button> : 
                    <Button warning block onPress={() => publish(true)} style={styles.BtnEdit}>
                        <Text style={styles.Button}>
                            Опубликовать
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