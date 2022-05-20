import React from 'react';
import { useFormikContext } from 'formik';
import ImageInputList from '../ImageInput/ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({ name }) {

    const { setFieldValue, errors, values, touched } = useFormikContext()


    const handleAdd = (uri) => {
        setFieldValue(name, [...values[name], uri])
    }

    const handleRemove = (uri) => {
        setFieldValue(name, values[name].filter((imageUri) => imageUri !== uri))
    }

    return (
        <>
            <ImageInputList
                imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>

    );
}

export default FormImagePicker;