'use client';

import FormInput from '@/components/form-control/form-input';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/app/(authen)/login/schema';
import { useLogin } from '@/app/(authen)/login/api/login.api';

const Login = () => {
  const { mutate, isPending } = useLogin();
  const methods = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: 'chienhd@liftsoft.vn',
      password: 'Lp123456',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log('🚀 ~ Login ~ errors:', errors);

  const submitHandler = handleSubmit(async (values) => {
    const { username, password } = values;

    mutate({ username, password });
  });

  return (
    <div className='mx-auto mt-20 w-[500px]'>
      <FormProvider {...methods}>
        <h3 className='mb-2 w-full pb-2 text-4xl'>Login</h3>
        <form onSubmit={submitHandler} className='flex flex-col gap-2'>
          <FormInput
            name='username'
            id='username'
            placeholder='user@example.com'
            label='Username'
          />
          <FormInput
            name='password'
            id='password'
            placeholder='Enter your password'
            type='password'
            label='Password'
          />

          <Button
            type='submit'
            disabled={isPending}
            className='mt-4 w-full bg-primary'
          >
            {isPending ? 'Loging ...' : 'Login'}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
