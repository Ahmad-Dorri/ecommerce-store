'use client';

import { ShoppingBag } from 'lucide-react';

import { Product } from '@/types';
import Currency from '@/components/ui/currency';
import { Button } from '@/components/ui/button';

interface InfoProps {
  data: Product;
}

export default function Info({ data }: InfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3  flex items-end justify-between ">
        <Currency className="text-2xl text-gray-900" price={data?.price} />
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">سایز:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">رنگ:</h3>
          <div className="flex justify-between items-center  gap-2">
            <div>{data?.color?.name}</div>
            <div
              className="h-6 w-6 rounded-full border border-gray-600 "
              style={{ backgroundColor: data.color.value }}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-3">
        <Button className="flex items-center gap-2">
          خرید
          <ShoppingBag size={20} />
        </Button>
      </div>
    </div>
  );
}
