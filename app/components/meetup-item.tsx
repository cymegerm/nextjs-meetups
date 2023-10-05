'use client';

import Image from 'next/image';
import { Card } from '@/app/components/ui/card';
import NavButton from '@/app/components/nav-button';

export interface Meetup {
  id: string;
  imageUrl: string;
  blurDataURL: string;
  imageAlt: string;
  title: string;
  address: string;
  imgPriority: boolean;
}

const MeetupItem = (meetup: Meetup) => {
  return (
    <li className='mb-12'>
      <Card>
        <h2 className='text-2xl text-center p-3'>{meetup.title}</h2>
        <div className='flex max-h-48 sm:max-h-72'>
          <Image
            src={meetup.imageUrl}
            alt={meetup.imageAlt}
            width={600}
            height={0}
            style={{
              minHeight: '10rem',
              objectFit: 'cover',
              backgroundImage: `url(${meetup.blurDataURL})`,
            }}
            priority={meetup.imgPriority}
          />
        </div>
        <p className='text-center pt-3 pb-2'>{meetup.address}</p>
        <div className='flex justify-center pt-2 pb-4'>
          <NavButton route={meetup.id} text='Reserve Seat' />
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
