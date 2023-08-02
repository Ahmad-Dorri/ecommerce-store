'use client';
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

import { Color, Size } from '@/types';
import MobileFiltersModal from './mobile-filters-modal';
import { Button } from '@/components/ui/button';

type MobileFiltersProps = {
  sizes: Size[];
  colors: Color[];
};

export default function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileFiltersModal
        isOpen={open}
        onClose={() => setOpen(false)}
        sizes={sizes}
        colors={colors}
      />
      <Button className="flex items-center gap-2" onClick={() => setOpen(true)}>
        <p className="hidden sm:block">مشاهده‌ی فیلترها</p>
        <p className="sm:hidden">فیلترها</p>
        <Plus size={20} />
      </Button>
    </>
  );
}
