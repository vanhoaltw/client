export type MainNavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
};

export interface User {
  id: number;
  firstName?: string;
  lastName: string;
  username: string;
  email: string;
  passwordHash: string;
  bio?: string;
  gender?: string;
  phoneNumber?: string;
  avatar?: string;
  address?: string;
  national?: string;
  isAvailable?: boolean;
  completeOnboarding?: boolean;
  birthday?: string;
  lastActivedAt?: string;
  registeredAt?: Date;
}
