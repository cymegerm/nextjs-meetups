import React from 'react';

type Meetup = {
  id: string;
  title: string;
  description: string;
};

type MeetupListProps = {
  meetups: Meetup[];
};

const MeetupList: React.FC<MeetupListProps> = ({ meetups }) => {
  return (
    <ul>
      {meetups.map((meetup) => (
        <li key={meetup.id}>
          <h3>{meetup.title}</h3>
          <p>{meetup.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default MeetupList;
