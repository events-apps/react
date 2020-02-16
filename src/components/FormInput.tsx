import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormInputProps {
  id: string;
  name: string;
  labelText: string;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, name, labelText, placeholder }) => {
  const { register } = useFormContext();

  return (
    <label className="block text-gray-700 text-sm font-semibold mb-4" htmlFor={id}>
      <span className="block mb-2">{labelText}</span>
      <input
        className="shadow appearance-none border rounded block w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        ref={register}
      />
    </label>
  );
};

export default FormInput;
