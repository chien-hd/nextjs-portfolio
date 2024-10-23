'use client';

import { IAppError } from '@/@types/common';
import { Button } from '@/components/ui/button';

const Error = ({ error, reset }: IAppError) => {
  return (
    <div>
      <p>{error.name}</p>
      <p>{error.message}</p>
      <Button onClick={() => reset()}>reset</Button>
    </div>
  );
};

export default Error;
