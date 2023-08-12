'use client';
import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCartStore from '@/hooks/use-cart';

export default function Summery() {
  const searchParams = useSearchParams();
  const items = useCartStore((state) => state.items);
  const removeAll = useCartStore((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('خرید با موفقیت انجام شد.');
      removeAll();
    }
    if (searchParams.get('canceled')) {
      toast.error('خرید کالا موفقیت آمیز نبود');
    }
  }, [searchParams, removeAll]);

  const totalPrice =
    items.length === 0
      ? 0
      : items.map((item) => Number(item.price)).reduce((acc, cur) => acc + cur);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );
    window.location = response.data.url;
  };
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">خلاصه سفارشات</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            مجموع سفارشات
          </div>
          <Currency price={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="w-full mt-6">
        خرید
      </Button>
    </div>
  );
}
