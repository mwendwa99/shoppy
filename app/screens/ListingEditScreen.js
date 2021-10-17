import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import * as Location from 'expo-location';

import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select atleast one image")
});

const categories = [
    { label: "furniture", value: 1, backgroundColor: 'red', icon: 'home' },
    { label: "clothing", value: 2, backgroundColor: 'green', icon: 'hanger' },
    { label: "phone", value: 3, backgroundColor: 'blue', icon: 'cellphone-basic' },
]
const ListingEditScreen = () => {
    const [columns, setColumns] = useState(3);
    const [location, setLocation] = useState()

    // fn to get user location async
    const getLocation = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) return;
        const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync()
        setLocation({ latitude, longitude })
    }
    // run fn on view mount
    useEffect(() => {
        getLocation();
    }, [])

    return (
        <Screen>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={(values) => console.log(location)}
            // validationSchema={validationSchema}
            // validator={() => ({})}
            >
                <FormImagePicker name="images" />
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
                    placeholder="Description"
                    numberOfLines={3}
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

export default ListingEditScreen