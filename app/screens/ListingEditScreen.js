import React from 'react'
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('title'),
    price: Yup.number().required().min(1).max(100000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    { label: "furniture", value: 1 },
    { label: "clothing", value: 2 },
    { label: "phone", value: 3 },
]
const ListingEditScreen = () => {
    return (
        <Screen>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

export default ListingEditScreen

const styles = StyleSheet.create({})
