import React, { useState } from 'react'
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('title'),
    price: Yup.number().required().min(1).max(100000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    { label: "furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
    { label: "clothing", value: 2, backgroundColor: 'green', icon: 'email' },
    { label: "phone", value: 3, backgroundColor: 'blue', icon: 'lock' },
]
const ListingEditScreen = () => {

    const [columns, setColumns] = useState(3)

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
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    key={columns}
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    width='50%'
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