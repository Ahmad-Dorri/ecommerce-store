'use client';
import React, { useEffect, useState } from 'react';

import Modal from '@/components/ui/modal';

import { Product } from '@/types';
import Gallery from '../gallery/gallery';
import Info from '../info';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Product;
}

export default function ProductModal({
  isOpen,
  onClose,
  data,
}: ProductModalProps) {
  // hydration
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  // if (!data) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8  ">
        {/* //todo: gallery */}
        <Gallery images={data.images} />
        <div className="mt-10 px-4 sm:pt-16 sm:px-0 lg:pt-0 ">
          {/* info */}
          <Info data={data} />
        </div>
      </div>
    </Modal>
  );
}
