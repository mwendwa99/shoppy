import React from 'react'
import { Formik } from 'formik'

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}

export default AppForm
