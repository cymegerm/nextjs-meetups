import { Meetup } from '@/app/components/meetup-item';

export const fakeMeetups: Meetup[] = [
  {
    id: 'm1',
    title: 'Montreal – Canada',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/4/4f/Montreal-canada-parc-urban.jpg',
    blurDataURL:
      'data:image/webp;base64,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',
    address: 'École de technologie supérieure ÉTS',
    imageAlt: 'skyline of Montreal',
  },
  {
    id: 'm2',
    title: 'San Francisco – USA',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/61/San_Francisco_from_the_Marin_Headlands_in_August_2022.jpg',
    blurDataURL:
      'data:image/webp;base64,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',
    address: 'Carnegie Mellon University Silicon Valley',
    imageAlt: 'skyline of San Francisco',
  },
  {
    id: 'm3',
    title: 'London – UK',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/14/City_of_London_skyline_27.12.2019.jpg',
    blurDataURL:
      'data:image/webp;base64,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',
    address: 'University College London',
    imageAlt: 'skyline of London',
  },
  {
    id: 'm4',
    title: 'Paris – France',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG',
    blurDataURL:
      'data:image/webp;base64,UklGRkIGAABXRUJQVlA4WAoAAAAgAAAAYgIAbgEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggVAQAALBPAJ0BKmMCbwE+bTaVSaQioaEgCJCADYlpbuE4hxiasM3Sf+1lImza68E//0/u8Lz/6/9PN38AE+iUnhx6D8vArlkzF6Z3iszMWWPZUjDKDti7PVLq5mi3CYEdjAXtF4/OS0lQyS79nzJ/3T/M5VXgXWidJauZpyBzHyarjiiHAbrvRq6LxyklUFx4kaz5Jd6L6D85LSPzJFblCpMFm121OS1aMCF/QfxRJd+17RdtE1auZ8duKa9mi2pyV/hHHbv2vZox+XgVzPkjdo3m121OQ3cG+Fdcp1/iRrPklgGvaLx+clq5nyS79qui8feiquZ6CukV9pd+1XM53zY13M+O3fteaRjlGVVwYdfl2S+/ahS8EXMgyXEDeaRj85LVvuOIZf1+vVeyPMYWfX2R5xBSwDGCeyX4/OS1cz5FAQL5I0RoJp9XsFfDSWfX624prycdCBlAeqnIbuZBkuKar8Hme0jseMJ5N+AFgAHLMFauZ8kbva9mjH3uWrg4ZJT5GCeyX45Byzrdh+vaKO+clq5nyS4psSX+PSshncYVSNEbwv6D+Jgrv1C5otqclq5j7uL6mNgT2R5jxf06OLo8eVkJJajuqhP0/aq2ZAVI1nyTaZb4w30WQzH5wiBO5q2H0k2JGs90h5e97hu5nyS4ryzPOIJu9r2XYlHnFEupN5UuCDu9Wvy0y1/QcFTgwv7/ce2I3ZgVV/MpoiQCrfNcVXL2SRx9NbW81t5KTQklIG/RZw+sR0UJaen5/OPzXGkft73uWrmfJLTBzszCou9G9oZAU9tkErd7VV3TNCA6TARBes4/OS1XIJCDWrmQKAnQBR2DpyWmjHhMxzh+cjvIIUE3e15stIAA/vLLz8FZm4cn4dOcAOM++FQpo2Xb+EL7xVSdEkm18StehT86GABAi7z0xjAhOaugtOeYMQ51PNH+tdUCLsWCqkIMjctF6EgVu9V47GYwZdfmsrSeq7yX85r/AzNnky+q+4cxchNz303KWSx6W5SMrBaPSvDQ5IuiW0aLt0lbfrq0j4ySiZjtmiQzhWSvk8gibx55R8xIlupoHsgIUeyvkopnz2YHakgzqHDsycEKG4lNT2XYlnjQRS5JJGcfxy83LTbf7Fi4tbkYqgAVOKEvVf5v22Pkxo5Jiytf6DwO0Vx4OZm5Ya/kNdNQfJjTwaGJ7CJ4H/7U4FSRdOcz5Jlhyk17QOnqPjp4C++/i8qXihxnEebzxVH/gGUXoGHL3tbe7fnHP1/l6hfE22TjQ6sORSLOiLu1tSFcS5JJQYVXsKq3DiIE67RNzNcfPxUJ54jd3Ayhk6PyFz17pEAC42SkbOAfgJNp+zIMxKiu2nG4sut75ZI/uH5hvU0/DgsiU4yoJ/hcwMRFVa8NPTcCsjS87m/TcdK1ivrJaTQfimgFx3kL5xRqidnV/rfTUvM+GrakgX/dpHFSMXmO4T9BfRqfdZiEwdXcMDoPmVnDoAA=',
    address: 'Institut Polytechnique de Paris',
    imageAlt: 'skyline of Paris',
  },
  {
    id: 'm5',
    title: 'Berlin – Germany',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/6c/Aerial_view_of_Berlin_%2832881394137%29.jpg',
    blurDataURL:
      'data:image/webp;base64,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',
    address: 'Technical University of Berlin',
    imageAlt: 'skyline of Berlin',
  },
];
