import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormTextareaProps {
  id: string;
  name: string;
  labelText: string;
  placeholder: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ id, name, labelText, placeholder }) => {
  const { register } = useFormContext();

  return (
    <label className="block text-gray-700 text-sm font-semibold mb-4" htmlFor={id}>
      <span className="block mb-2">{labelText}</span>
      <textarea
        className="resize-none shadow appearance-none border rounded block w-full max-w-sm h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        name={name}
        placeholder={placeholder}
        ref={register}
      />
    </label>
  );
};

export default FormTextarea;
