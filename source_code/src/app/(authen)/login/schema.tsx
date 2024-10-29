import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().email().min(1, {
    message: 'Please enter username',
  }),
  password: z.string().min(1, {
    message: 'Please enter Password',
  }),
});
