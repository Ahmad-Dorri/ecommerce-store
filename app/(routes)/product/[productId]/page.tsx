interface ProductPageProps {
  params: {
    productId: string;
  };
}
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Container from '@/components/ui/container';
import ProductList from '../../components/product-list';
import Gallery from '@/components/gallery/gallery';
import Info from '@/components/info';

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  }).then((products) => products.filter((item) => item.id !== product.id));

  console.log(suggestedProducts);
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8 ">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8  ">
            {/* //todo: gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:pt-16 sm:px-0 lg:pt-0 ">
              {/* info */}
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="محصولات پیشنهادی" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
}
