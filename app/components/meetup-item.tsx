import React from 'react';

type Meetup = {
  id: string;
  title: string;
  description: string;
};

type MeetupItemProps = {
  meetup: Meetup;
};

const MeetupItem: React.FC<MeetupItemProps> = ({ meetup }) => {
  return (
    <li>
      <h3>{meetup.title}</h3>
      <p>{meetup.description}</p>
    </li>
  );
};

export default MeetupItem;
