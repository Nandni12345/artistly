
import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().min(50, 'Bio must be at least 50 characters'),
  categories: z.array(z.string()).min(1, 'Please select at least one category'),
  languages: z.array(z.string()).min(1, 'Please select at least one language'),
  feeRange: z.string().min(1, 'Please select a fee range'),
  location: z.string().min(5, 'Please enter your location'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  website: z.string().url().optional().or(z.literal('')),
  experience: z.string().min(1, 'Please select your experience level'),
  availability: z.array(z.string()).min(1, 'Please select your availability')
});

export type FormData = z.infer<typeof formSchema>;
