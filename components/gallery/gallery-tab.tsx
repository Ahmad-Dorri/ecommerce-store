'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Image as ImageType } from '@/types';
import { TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface GalleryTabProps {
  image: ImageType;
}

export default function GalleryTab({ image }: GalleryTabProps) {
  const [selected, setSelected] = useState('');
  return (
    <TabsTrigger
      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md"
      value={image.id}
      onClick={() => setSelected(image.id)}>
      <div>
        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
          <Image
            src={image.url}
            fill
            alt=""
            className="object-cover object-center"
            property="false"
          />
        </span>
        <span
          className={cn(
            'absolute inset-0 rounded-md ring-2 ring-offset-2',
            image.id === selected ? 'ring-black' : 'ring-transparent'
          )}
        />
      </div>
    </TabsTrigger>
  );
}
