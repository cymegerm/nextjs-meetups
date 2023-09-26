'use client';

import Image from 'next/image';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export interface Meetup {
  id: string;
  imageUrl: string;
  blurDataURL: string;
  imageAlt: string;
  title: string;
  address: string;
}

const MeetupItem = (meetup: Meetup) => {
  function handleClick() {
    alert('yes');
  }

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
            style={{ minHeight: '10rem', objectFit: 'cover' }}
            placeholder='blur'
            blurDataURL={meetup.blurDataURL}
          />
        </div>
        <p className='text-center pt-3 pb-2'>{meetup.address}</p>
        <div className='flex justify-center pt-2 pb-4'>
          <Button onClick={handleClick}>Reserve Seat</Button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
