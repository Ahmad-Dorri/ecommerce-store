import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (proudctId: string): Promise<Product> => {
  const url = URL + '/' + proudctId;
  const res = await fetch(url, { cache: 'no-store' });
  return res.json();
};

export default getProduct;
