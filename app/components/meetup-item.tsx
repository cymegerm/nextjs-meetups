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
        <h2 className="text-2xl text-center p-3">{meetup.title}</h2>
        <div className="flex max-h-48 sm:max-h-72">
          <Image
            src={meetup.imageUrl}
            alt={meetup.imageAlt}
            width={600}
            height={0}
            style={{ minHeight: '10rem', objectFit: 'cover' }}
            priority
          />
        </div>
        <p className="text-center p-2">{meetup.address}</p>
      </Card>
    </li>
  );
};

export default MeetupItem;
