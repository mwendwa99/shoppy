import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen';
import Card from '../components/Card'
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'chair for sale',
        price: 3000,
        image: require('../assets/chair.jpg')
    },
    {
        id: 2,
        title: 'couch for sale',
        price: 10000,
        image: require('../assets/couch.jpg')
    },
]

const ListingsScreen = () => {
    return (
        <Screen style={styles.screen} >
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"Kes " + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    )
}

export default ListingsScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})
