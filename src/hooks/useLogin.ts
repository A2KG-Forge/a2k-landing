import { login } from '@/services/authService';
import type { LoginResponse, LoginCredentials } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: login,
    onSuccess: () => {
      window.location.href = '/dashboard';
    },
  });
};
