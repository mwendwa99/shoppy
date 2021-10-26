import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            imageStyle={{ opacity: 0.8 }}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.tagline}>Shoppy</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,6)'
    },
    logo: {
        width: 50,
        height: 50,
    },
    logoContainer: {
        position: 'absolute',
        top: 30,
        alignItems: 'center'

    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },
    tagline: {
        fontSize: 20,
        fontWeight: "600",
        paddingVertical: 10,
        color: colors.white
    }
})

export default WelcomeScreen;