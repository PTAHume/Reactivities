import { useField} from 'formik';
import { Label, Form } from 'semantic-ui-react';

export const InputControl = (
    {
        placeholder,
        name,
        label
    }: {
        placeholder: string,
        name: string,
        label?: string
    }) => {
    const [field, meta] = useField(name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <input {...field} {...{ placeholder, name }} />
            {meta.touched && meta.error ? (
                <Label basic color="red">{meta.error}</Label>
            ) : null}
        </Form.Field>
    );
};
