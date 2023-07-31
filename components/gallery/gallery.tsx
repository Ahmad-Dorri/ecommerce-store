'use client';
import { Image as ImageProp } from '@/types';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import GalleryTab from './gallery-tab';
import { useEffect, useState } from 'react';

interface GalleryProps {
  images: ImageProp[];
}

export default function Gallery({ images }: GalleryProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <Tabs defaultValue={images[0].id} className="flex flex-col-reverse">
      <div className="mx-auto  mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none ">
        <TabsList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabsList>
      </div>
      {images.map((image) => (
        <TabsContent key={image.id} value={image.id}>
          <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden ">
            <Image
              fill
              src={image.url}
              alt="Image"
              className="object-cover object-center"
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
