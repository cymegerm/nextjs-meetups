import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav className='sticky top-0 left-0 width-screen p-6 text-2xl font-bold backdrop-blur-3xl'>
      <Link
        href='/'
        className='italic focus:opacity-90 active:opacity-90 visited:opacity-100 hover:opacity-90 transition:opacity'
      >
        Next Meetups
      </Link>
    </nav>
  );
};

export default NavMenu;
