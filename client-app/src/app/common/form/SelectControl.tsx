import { useField } from 'formik';
import { Label, Form, Select, DropdownItemProps } from 'semantic-ui-react';

export const SelectControl = (
    {
        placeholder,
        name,
        options,
        label
    }: {
        placeholder: string,
        name: string,
        options: DropdownItemProps[],
        label?: string
    }) => {
    const [field, meta, helpers] = useField(name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <Select clearable
                options={options}
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={placeholder}
            />
            {meta.touched && meta.error ? (
                <Label basic color="red">{meta.error}</Label>
            ) : null}
        </Form.Field>
    );
};
