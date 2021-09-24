import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/cup.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Dining set for sale</AppText>
                <AppText style={styles.price}>Kes 100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/user.jpg")}
                        title="Brian Mwendwa"
                        subTitle="5 listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        // marginVertical: 20
    }
})
