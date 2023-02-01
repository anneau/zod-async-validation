import { z } from 'zod';

export const User = z.object({
  username: z.string().regex(/^[a-zA-Z0-9]+$/),
  email: z.string().email(),
  password: z.string(),
});
