'use client';
import React, { useEffect, useState } from 'react';

import { cn, formatter } from '@/lib/utils';

interface CurrencyProps {
  price?: string | number;
  className?: string;
}

export default function Currency({ price, className }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className={cn('font-semibold', className)}>
      {formatter.format(Number(price)) + ' ریال '}
    </div>
  );
}
