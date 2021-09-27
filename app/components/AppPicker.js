import React from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText'
import PickerItem from './PickerItem';
import Screen from './Screen';

const AppPicker = ({ icon, items, onSelectItem, selectedItem, placeholder }) => {

    const [modalVisible, setModalVisible] = React.useState(false)
    // console.log(items)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />}
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide" >
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItem
                            label={item.label}
                            onTap={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                                console.log(item)
                            }}
                        />

                    }
                />
            </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
        color: defaultStyles.colors.medium,
    },
    text: {
        flex: 1,
    },
})
