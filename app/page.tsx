import MeetupList from '@/components/meetup-list';
import { fakeMeetups } from '@/api/_fakeMeetups';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12 pt-4'>
      <MeetupList meetups={fakeMeetups} />
    </main>
  );
}
