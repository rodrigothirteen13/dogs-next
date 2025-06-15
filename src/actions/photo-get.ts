'use server';

import { PHOTO_GET } from '@/functions/api';
import apiError from '@/functions/api-error';
import { Photo } from './photos.get';

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: Photo;
  comments: Comment[];
};

export default async function photoGet(id: string): Promise<PhotoData> {
  const { url } = PHOTO_GET(id);
  const response = await fetch(url, {
    next: { revalidate: 60, tags: ['photos', 'comment'] },
  });

  if (!response.ok) {
    throw new Error('Erro ao pegar as foto.');
  }

  const data = (await response.json()) as PhotoData;
  return data;
}
