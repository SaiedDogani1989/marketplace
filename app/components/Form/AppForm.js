import { Formik } from 'formik';
import React from 'react';

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik

            initialValues={initialValues}
            //for calling the server and send data
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (<>
                {children}
            </>)}
        </Formik>
    );
}

export default AppForm;