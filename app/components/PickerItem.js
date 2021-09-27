import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'

const PickerItem = ({ label, onTap }) => {
    return (
        <TouchableOpacity onPress={onTap}>
            <AppText style={styles.text}> {label} </AppText>
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    text: {
        padding: 20,
    }
})
