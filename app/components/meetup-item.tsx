'use client';

import Image from 'next/image';
import { Card } from '@/app/components/shadcn-ui/card';
import NavButton from '@/app/components/nav-button';

export interface Meetup {
  id: string;
  title: string;
  address: string;
  blurImageUrl: string;
  imageUrl: string;
  imageAlt: string;
  imagePriority: boolean;
}

const MeetupItem = (meetup: Meetup) => {
  return (
    <li className='mb-12'>
      <Card>
        <h2 className='text-2xl text-center p-3'>{meetup.title}</h2>
        <div className='flex max-h-48 sm:max-h-72'>
          <Image
            priority={meetup.imagePriority}
            src={meetup.imageUrl}
            alt={meetup.imageAlt}
            width={600}
            height={0}
            style={{
              minHeight: '10rem',
              objectFit: 'cover',
              backgroundImage: `url(${meetup.blurImageUrl})`,
            }}
          />
        </div>
        <p className='text-center pt-3 pb-2'>{meetup.address}</p>
        <div className='flex justify-center pt-2 pb-4'>
          <NavButton route={`/rsvp?event=${meetup.id}`} text='Reserve Seat' />
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
