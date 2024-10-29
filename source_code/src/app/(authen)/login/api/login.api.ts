import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import { IGenericResponse } from '@/@types/common';
import http from '@/config/axios.config';

export interface ILoginParams {
  username: string;
  password: string;
}

const login = async (params: ILoginParams) => {
  const res = await http.post<IGenericResponse>(
    'auth/v1/api-token-login-auth',
    {
      ...params,
    },
  );

  return res.data;
};

export const useLogin = () => {
  const [, setCookie] = useCookies(['token']);
  const route = useRouter();

  return useMutation({
    mutationFn: (params: ILoginParams) => login(params),
    onSuccess(data) {
      if (data.is_flag) {
        const token = data.data.token;
        setCookie('token', token, { path: '/', maxAge: 60 * 60 * 24 });
        route.push('/');
      }
    },
  });
};
