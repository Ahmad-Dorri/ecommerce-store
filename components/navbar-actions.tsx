'use client';

import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="gap-2">
        <ShoppingBag size={20} color="white" />
        {/* //todo: change the zero to the items in shopping bag */}
        <p className="flex items-center "> سبد خرید {0}</p>
      </Button>
    </div>
  );
}
