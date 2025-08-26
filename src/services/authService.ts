import axios from 'axios';
import api from './api';
import type { LoginCredentials, LoginResponse } from '@/types/auth';

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  try {
    const { data } = await api.post<LoginResponse>('api/auth/login', credentials);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Login failed. Please try again';
      throw new Error(message);
    }
    throw error;
  }
};
