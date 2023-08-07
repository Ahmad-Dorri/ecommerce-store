'use client';
import { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import useCartStore from '@/hooks/use-cart';

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCartStore();
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => {
          router.push('/cart');
        }}
        className="gap-2">
        <ShoppingBag size={20} color="white" />
        {/* //todo: change the zero to the items in shopping bag */}
        <p className="flex items-center">سبد خرید</p>
        <span className="font-semibold text-lg">({cart.items.length})</span>
      </Button>
    </div>
  );
}
