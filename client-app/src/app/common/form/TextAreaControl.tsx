import { useField } from 'formik';
import { Label, Form } from 'semantic-ui-react';

export const TexTAreaControl = (
    {
        placeholder,
        name,
        rows,
        label
    }: {
        placeholder: string,
        name: string,
        rows:number,
        label?: string
    }) => {
    const [field, meta] = useField(name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <textarea {...field} {...{ placeholder, name, rows }} />
            {meta.touched && meta.error ? (
                <Label basic color="red">{meta.error}</Label>
            ) : null}
        </Form.Field>
    );
};
