import { Input, InputProps } from '@/components/ui/input';
import { Controller, useFormContext } from 'react-hook-form';

const FormInput = ({ name, ...props }: InputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          errorMsg={errors[name]?.message?.toString()}
          {...field}
          {...props}
        />
      )}
    />
  );
};

export default FormInput;
