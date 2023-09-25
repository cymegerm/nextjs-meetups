import Image from 'next/image';

export interface Meetup {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  address: string;
}

const MeetupItem = (meetup: Meetup) => {
  return (
    <li className="mb-12">
      <h3>{meetup.title}</h3>
      <Image
        src={meetup.imageUrl}
        alt={meetup.imageAlt}
        width={600}
        height={0}
        layout="responsive"
        priority
      />
      <p>{meetup.address}</p>
    </li>
  );
};

export default MeetupItem;
