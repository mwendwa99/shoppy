import React from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText'
import PickerItem from './PickerItem';
import Screen from './Screen';

const AppPicker = ({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    selectedItem,
    width = "100%",
    placeholder }) => {

    const [modalVisible, setModalVisible] = React.useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />}

                    {selectedItem
                        ? <AppText style={styles.text}> {selectedItem.label} </AppText>
                        : <AppText style={styles.placeholder}> {placeholder} </AppText>
                    }
                    <MaterialCommunityIcons name="chevron-down" size={20} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide" >
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) =>
                        <PickerItemComponent
                            item={item}
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
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
        color: defaultStyles.colors.medium,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
    },
    text: {
        flex: 1,
    },
})
