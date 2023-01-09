
export type GospelType = {
  id: string
  title: string
  slug: string
  date: string
  audio_link?:string
  first_reading?: string
  second_reading?: string
  halelluia?: string;
  gospel: string;
  reflection?: GospelReflection;
};

export type GospelReflection = {
  id: string
  title: string
  slug: string
  date: string
  excerpt?: string
  content: string
  author: string
};
