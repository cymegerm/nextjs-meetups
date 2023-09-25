import React from 'react';
import MeetupItem, { Meetup } from '@/app/components/meetup-item';

interface Props {
  meetups: Meetup[];
}

const MeetupList = ({ meetups }: Props) => {
  return (
    <ul className="max-w-lg">
      {meetups.map((meetup: Meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          imageUrl={meetup.imageUrl}
          imageAlt={meetup.imageAlt}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
