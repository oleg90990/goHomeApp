import React from 'react';
import { Container, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { toDashboard, toAccounnt } from '../../utilites/appNavigation';
import { StyleSheet } from "react-native";

interface IFooterButton {
    title: string;
    icon: string;
    action: () => any;
}

const buttons: IFooterButton[] = [
    {
        title: 'профиль',
        icon: 'person',
        action: () => {
            toAccounnt();
        }
    },
    {
        title: 'Поиск',
        icon: 'search',
        action: () => {
            toDashboard();
        }
    }
];

const Layout: React.FC = (props) => {
    return (
        <Container theme={{
            brandPrimary: 'red'
        }}> 
            { props.children }
            <Footer>
                <FooterTab>
                    {(
                        buttons.map((button, i) => {
                            return (
                                <Button key={i} vertical onPress={button.action}>
                                    <Icon style={styles.Footer} name={button.icon} />
                                    <Text style={styles.Footer}>{button.title}</Text>
                                </Button>
                            )
                        })
                    )}
                </FooterTab>
            </Footer>
        </Container>
    );
};

const styles = StyleSheet.create({
    Footer: {
      color: 'white'
    }
});

export default Layout;