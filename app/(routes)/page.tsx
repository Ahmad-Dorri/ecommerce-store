import React from 'react';

import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';

import ProductList from './components/product-list';

export default async function HomePage() {
  // const billboard = await getBillboard('ab0c31c6-0383-419d-9daf-9bb5c0dabd49');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <Billboard data={billboard} /> */}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="محصولات ویژه" items={products} />
        </div>
      </div>
    </Container>
  );
}
