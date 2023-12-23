"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  label?: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: number;
  placeholder?: string;
  validation?: string;
}

const FormInput = ({
  name,
  label,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
}: IInput) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          type === 'password' ?
          <Input.Password
            {...field}
            type={type}
            value={value ? value : field.value}
            placeholder={placeholder}
            size={size}
          />: 
          <Input
            {...field}
            type={type}
            value={value ? value : field.value}
            placeholder={placeholder}
            size={size}
          />
        )}
      />
    </>
  );
};

export default FormInput;
