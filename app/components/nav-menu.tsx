import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav className='p-6 text-2xl font-bold sticky top-0 left-0 width-screen'>
      <Link
        href='/'
        className='focus:opacity-90 active:opacity-90 visited:opacity-100 hover:opacity-90 transition:opacity'
      >
        Next Meetups
      </Link>
    </nav>
  );
};

export default NavMenu;
