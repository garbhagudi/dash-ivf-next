/** Official channel: https://www.youtube.com/@GarbhaGudiIVFCentre */
export const GARBHAGUDI_YOUTUBE_CHANNEL =
  'https://www.youtube.com/@GarbhaGudiIVFCentre';

/**
 * GarbhaGudi IVF Centre patient stories on YouTube, mapped to language chips on the landing page.
 * `UjZ7APf5EbE` is a Telugu-titled upload; the rest are English-language clips from the same channel
 * until marketing publishes Kannada / Hindi / Tamil / Malayalam-specific edits (swap `videoId` then).
 */
export const testimonialVideosByLanguage = [
  {
    lang: 'en',
    label: 'English',
    videoId: 'cPPnXU9fB_0',
    title: 'First embryo transfer success — GarbhaGudi Bangalore',
  },
  {
    lang: 'kn',
    label: 'Kannada',
    videoId: 'I2KHjfiVKn0',
    title:
      'Successful IVF pregnancy — GarbhaGudi Kalyan Nagar, Bangalore',
  },
  {
    lang: 'hi',
    label: 'Hindi',
    videoId: 'tXsmr-fnuV4',
    title:
      'IUI success in first attempt — GarbhaGudi Kalyan Nagar, Dr. Aparna',
  },
  {
    lang: 'ta',
    label: 'Tamil',
    videoId: 'cPPnXU9fB_0',
    title:
      'Patient success story — GarbhaGudi Bangalore',
  },
  {
    lang: 'te',
    label: 'Telugu',
    videoId: 'UjZ7APf5EbE',
    title: 'Telugu success story — GarbhaGudi Electronic City, Bangalore',
  },
  {
    lang: 'ml',
    label: 'Malayalam',
    videoId: 'I2KHjfiVKn0',
    title:
      'IVF success — GarbhaGudi Kalyan Nagar, Bangalore',
  },
];

/** Home page video carousel — same channel, four featured clips. */
export const featuredCarouselVideoIds = [
  'cPPnXU9fB_0',
  'UjZ7APf5EbE',
  'I2KHjfiVKn0',
  'tXsmr-fnuV4',
];
