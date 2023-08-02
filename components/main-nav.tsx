'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Category } from '@/types';

interface MainNavProps {
  data: Category[];
}

export default function MainNav({ data }: MainNavProps) {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 flex items-center gap-2 space-x-4 lg:space-x-6 ">
      {routes.map((route) => (
        <Link
          key={route.href}
          className={cn(
            'text-sm font-medium transition-colors  hover:text-black ',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
          href={route.href}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
