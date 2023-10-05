import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav className='p-6 text-2xl font-bold'>
      <Link href='/'>Next Meetups</Link>
    </nav>
  );
};

export default NavMenu;
