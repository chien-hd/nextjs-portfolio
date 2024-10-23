import Link from 'next/link';
import React from 'react';

const CSidebar = () => {
  return (
    <div>
      <Link href={'/dashboard'}>Dashboard</Link>
      <Link href={'/dashboard/1'}>Dashboard/1</Link>
      <Link href={'/dashboard/2'}>Dashboard/2</Link>
    </div>
  );
};

export default CSidebar;
