import { AxiosError } from 'axios';
import createAxiosInstance from './api';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface CreatePayload {
  name: string;
  email: string;
  password: string;
  username: string;
  hero_id: string;
}

export type TUser = {
  id: number;
  password: string;
  name: string;
  email: string;
};

class UserService {
  static login = async (
    payload: LoginPayload
  ): Promise<{ data?: { user: TUser; token: string }; error?: string }> => {
    const api = await createAxiosInstance();

    try {
      const { data } = await api.post('/user/sign-in', payload);
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };

  static create = async (
    payload: CreatePayload
  ): Promise<{ data?: { user: TUser; token: string }; error?: string }> => {
    const api = await createAxiosInstance();

    try {
      const { data } = await api.post('/user/create', payload);
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };
}

export { UserService };
