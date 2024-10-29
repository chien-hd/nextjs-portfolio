'use client';
import { useGetUser } from '@/app/(authen)/login/api/get-auth.api';

export default function Home() {
  const { data } = useGetUser();
  console.log('🚀 ~ AppProvider ~ data:', data);
  return <div>Home Page</div>;
}
