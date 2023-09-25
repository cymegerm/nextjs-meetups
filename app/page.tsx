import Image from 'next/image';
import MeetupList from '@/app/components/meetup-list';
import { fakeMeetups } from '@/app/components/fakeMeetups';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12'>
      <MeetupList meetups={fakeMeetups} />
    </main>
  );
}
