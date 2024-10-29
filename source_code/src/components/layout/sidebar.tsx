'use client';

import { useLogout } from '@/app/(authen)/login/api/logout.api';
import { Button } from '@/components/ui/button';
import { VscSignOut } from 'react-icons/vsc';

const Sidebar = () => {
  const LogoutMutate = useLogout();

  const handleLogout = () => {
    LogoutMutate.mutate();
  };

  return (
    <div className='fixed left-0 top-0 w-full'>
      <div className='flex justify-end'>
        <Button
          variant='ghost'
          className='size-9 rounded-full p-0'
          onClick={handleLogout}
        >
          <VscSignOut size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
