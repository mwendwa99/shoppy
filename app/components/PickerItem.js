import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'

const PickerItem = ({ item, onTap }) => {
    return (
        <TouchableOpacity onPress={onTap}>
            <AppText style={styles.text}> {item.label} </AppText>
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    text: {
        padding: 20,
    }
})
