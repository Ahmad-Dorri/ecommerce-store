'use client';
import { useEffect, useState } from 'react';

import Container from '@/components/ui/container';
import useCartStore from '@/hooks/use-cart';

import CartItem from './components/cart-item';
import Summery from './components/summery';

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCartStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black ">سبد خرید</h1>
        </div>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12 ">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && (
              <p className="text-neutral-500">
                محصولی به سبد خرید اضافه نشده است.
              </p>
            )}
            <ul>
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          </div>
          <Summery />
        </div>
      </Container>
    </div>
  );
}
