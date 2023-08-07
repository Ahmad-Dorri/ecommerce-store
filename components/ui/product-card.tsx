'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { Expand, ShoppingCart } from 'lucide-react';

import { Product } from '@/types';

import IconButton from './icon-button';
import Currency from './currency';
import ProductModal from '@/components/modals/product-modal';
import useCartStore from '@/hooks/use-cart';

type ProductCardProps = {
  data: Product;
};

export default function ProductCard({ data }: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const cart = useCartStore();

  const router = useRouter();
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <ProductModal isOpen={open} onClose={() => setOpen(false)} data={data} />
      <div
        onClick={() => router.push(`/product/${data.id}`)}
        className="bg-white cursor-pointer group rounded-xl border p-3 space-y-4 ">
        <div className="aspect-square rounded-xl bg-gray-100 relative ">
          {/* images and actions */}
          <Image
            className="aspect-square object-cover rounded-md "
            fill
            src={data?.images?.[0]?.url}
            alt={data.name}
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 ">
            <div className="flex gap-6 justify-center">
              <IconButton
                icon={<Expand size={20} className="text-gray-600" />}
                className="bg-white"
                onClick={(event) => {
                  event.stopPropagation();
                  handleClick();
                }}
              />
              <IconButton
                icon={<ShoppingCart size={20} className="text-gray-600" />}
                className="bg-white"
                onClick={(event) => {
                  event.stopPropagation();
                  cart.addItem(data);
                }}
              />
            </div>
          </div>
        </div>
        {/* description */}
        <div>
          <p className="font-semibold text-lg">{data.name}</p>
          <p className="text-sm text-gray-500">{data.category?.name}</p>
        </div>
        {/* price */}
        <div className="flex items-center justify-between">
          <Currency price={data?.price} />
        </div>
      </div>
    </>
  );
}
