import http from '@/config/axios.config';
import { useQuery } from '@tanstack/react-query';

const getAuth = async () => {
  const res = await http.get('auth/v1/user-profile');

  return res.data;
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ['fetch-user'],
    queryFn: getAuth,
    staleTime: 10 * 1000,
    refetchOnWindowFocus: true,
  });
};
