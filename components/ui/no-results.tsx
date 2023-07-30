import { Frown } from 'lucide-react';
import React from 'react';

type Props = {};

export default function NoResults({}: Props) {
  return (
    <div className="flex items-center justify-center h-full w-full  text-neutral-700 gap-4">
      <Frown height={48} width={48} />
      هیچ نتیجه ای پیدا نشد.
    </div>
  );
}
