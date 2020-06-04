import React from 'react';
import { Container, Header, Title, Footer, FooterTab, Button, Text, Right, Body, Icon, Left } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import buttons from '../../data/footerButtons';
import logo from '../../assets/img/cat.png';

const Layout: React.FC = (props) => {
    return (
        <Container>
        <Header>
            <Left>
                <Image source={logo} style={styles.logo} />
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