import React from 'react';
import MeetupItem, { Meetup } from '@/components/meetup-item';

interface MeetupListProps {
  meetups: Meetup[];
}

const MeetupList = ({ meetups }: MeetupListProps) => {
  return (
    <ul className='max-w-lg'>
      {meetups.map((meetup: Meetup, i: number) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          address={meetup.address}
          blurImageUrl={meetup.blurImageUrl}
          imageUrl={meetup.imageUrl}
          imageAlt={meetup.imageAlt}
          imagePriority={i <= 1}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
