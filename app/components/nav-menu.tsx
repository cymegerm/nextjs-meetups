import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav className='sticky top-0 left-0 width-screen p-6 text-2xl backdrop-blur-3xl'>
      <Link
        href='/'
        className='italic tracking-widest decoration-transparent decoration-4 underline-offset-8 hover:underline focus:opacity-90 active:opacity-90 visited:opacity-100 hover:opacity-90 hover:decoration-stone-700/90 transition-all'
      >
        Next Meetups
      </Link>
    </nav>
  );
};

export default NavMenu;
