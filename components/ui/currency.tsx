'use client';
import React, { useEffect, useState } from 'react';

import { formatter } from '@/lib/utils';

interface CurrencyProps {
  price?: string | number;
}

export default function Currency({ price }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return <div className="font-semibold">{formatter.format(Number(price))}</div>;
}
