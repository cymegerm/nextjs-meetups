import { Meetup } from '@/app/components/meetup-item';

export const fakeMeetups: Meetup[] = [
  {
    id: 'm1',
    title: 'Montreal, Canada',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/4/4f/Montreal-canada-parc-urban.jpg',
    address: 'École de technologie supérieure ÉTS',
    imageAlt: 'This is a first, amazing meetup!',
  },
  {
    id: 'm2',
    title: 'San Francisco, USA',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/61/San_Francisco_from_the_Marin_Headlands_in_August_2022.jpg',
    address: 'Carnegie Mellon University Silicon Valley',
    imageAlt: 'This is a second, amazing meetup!',
  },
  {
    id: 'm3',
    title: 'Berlin, Germany',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/6c/Aerial_view_of_Berlin_%2832881394137%29.jpg',
    address: 'Technical University of Berlin',
    imageAlt: 'This is a third, amazing meetup!',
  },
];
