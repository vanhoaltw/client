import { User } from '@/types/common';

export interface AuthResponse {
  token: string;
  success: boolean;
  user: User;
}
