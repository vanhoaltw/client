import React from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '@/components/forms/Input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

const EmailForm = () => {
  const form = useForm();
  const onSubmit = (values: any) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='mb-4 grid grid-cols-2 gap-4'>
          <FormInput label='Email' name='email' control={form.control} />
        </div>

        <Button type='submit'>Lưu</Button>
      </form>
    </Form>
  );
};

export default EmailForm;
