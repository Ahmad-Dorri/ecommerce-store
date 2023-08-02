'use client';
import React, { useEffect, useState } from 'react';

import Modal from '@/components/ui/modal';

import Filter from './filter';
import { Color, Size } from '@/types';

interface MobileFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  sizes: Size[];
  colors: Color[];
}

export default function MobileFiltersModal({
  isOpen,
  onClose,
  sizes,
  colors,
}: MobileFiltersModalProps) {
  // hydration
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      title="فیلترها"
      description="فیلتر بر اساس سایز و رنگ"
      isOpen={isOpen}
      onClose={onClose}>
      <div>
        <Filter valueKey="sizeId" name="سایز ها" data={sizes} />
        <Filter valueKey="colorId" name="رنگ ها" data={colors} />
      </div>
    </Modal>
  );
}
