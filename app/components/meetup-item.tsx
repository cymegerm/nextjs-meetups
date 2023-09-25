import Image from 'next/image';
import { Card } from '@/app/components/ui/card';

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
      <Card>
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
      </Card>
    </li>
  );
};

export default MeetupItem;
