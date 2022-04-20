import type { NextPage } from 'next';
import { Navigation } from '../components/Navigation/Navigation';
import { ProductCard } from '../components/ProductCard/ProductCard';

const Home: NextPage = ({ products }: any) => {
  if (!products) return null;

  return <>
    <Navigation />
    {products.map((product: any) => <ProductCard key={product.id} product={product} />)}
  </>
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const products = await res.json();

  return {
    props: {
      products: products.data
    },
  }
}

export default Home