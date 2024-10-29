import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import { IGenericResponse } from '@/@types/common';
import http from '@/config/axios.config';
import { PUBLIC_URL } from '@/constants/urls';

const logout = async () => {
  const res = await http.delete<IGenericResponse>('auth/v1/logout');

  return res.data;
};

export const useLogout = () => {
  const [, , removeCookie] = useCookies(['token']);
  const route = useRouter();

  return useMutation({
    mutationFn: logout,
    onSettled() {
      removeCookie('token');
      route.push(PUBLIC_URL.LOGIN);
    },
  });
};
