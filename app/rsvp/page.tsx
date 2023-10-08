'use client';

import { useSearchParams } from 'next/navigation';
import { fakeMeetups } from '@/components/fakeMeetups';

export default function Rsvp() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('event');
  const eventCity = fakeMeetups.filter((meetup) => meetup.id === eventId)[0]
    .title;

  return <h1 className='text-center'>{eventCity}</h1>;
}
