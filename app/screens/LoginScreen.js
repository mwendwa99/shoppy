import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton, } from '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const LoginScreen = () => {
    return (
        <Screen style={styles.container} >
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    secureTextEntry
                    placeholder="Password"
                />
                <SubmitButton title="login" />
            </AppForm>


        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
})
