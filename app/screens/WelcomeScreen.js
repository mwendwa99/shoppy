import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            blurRadius={1}
            imageStyle={{ opacity: 0.4 }}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.tagline}>Shoppy</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" onPress={() => console.log('tapped')} />
                <AppButton title="Regiser" color="secondary" onPress={() => console.log('tapped')} />

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