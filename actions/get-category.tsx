import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (categoryId: string): Promise<Category> => {
  const url = URL + '/' + categoryId;

  const res = await fetch(url, { cache: 'no-store' });
  return res.json();
};

export default getCategory;
