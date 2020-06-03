import React from 'react';
import { toDashboard, toAccounnt } from '../../utilites/appNavigation';
import { Scens as ScensEnum } from '../../enum/Scens'
import { Container, Header, Title, Footer, FooterTab, Button, Text, Right, Body, Icon, Left } from 'native-base';
import { Image, StyleSheet } from 'react-native';

interface IFooterButton {
    title: string;
    action: () => any;
    icon: string;
}

const Layout: React.FC = (props) => {
    const buttons: IFooterButton[] = [
        {
            title: 'Аккаунт',
            icon: 'person',
            action: toAccounnt
        },
        {
            title: 'Гланая',
            icon: 'menu',
            action: toDashboard
        }
    ];

    const toScen = (scen: ScensEnum) => {
        // Action(scen);
    }

    return (
        <Container>
        <Header>
            <Left>
                <Image source={require('../../assets/img/cat.png')} style={styles.logo} />
            </Left>
            <Body>
                <Title>Иду домой</Title>
            </Body>
            <Right />
            </Header>
                { props.children }
            <Footer>
                <FooterTab>
                    {(
                        buttons.map((button, i) => {
                            return (
                                <Button key={i} vertical onPress={button.action}>
                                    <Icon name={button.icon} />
                                    <Text>{button.title}</Text>
                                </Button>
                            )
                        })
                    )}
                </FooterTab>
            </Footer>
        </Container>
    );
};

// styles
const styles = StyleSheet.create({
    logo: {
        height: 30,
        width: 30,
        marginLeft: 10
    }
});

export default Layout;