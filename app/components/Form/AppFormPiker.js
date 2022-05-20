import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPiker({
    items,
    name,
    placeholder,
    numberOfColumns,
    PickerItemComponent }) {

    //add PikerItemComponent props to make the PikerItem flexible
    const { setFieldValue, errors, values, touched } = useFormikContext()

    return (
        <>
            <AppPicker
                items={items}
                onSelectedItem={(item) => setFieldValue(name, item)}
                numberOfColumns={numberOfColumns}
                placeholder={placeholder}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>


    );
}

export default AppFormPiker;