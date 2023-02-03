import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Product from '../models/Product';
import db from '../utils/db';
import { Store } from '../utils/Store';
import Hero from '../components/Hero';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import About from '../components/About';

export default function Home({ products, featuredProducts }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // Send a ajax request to the database to check if there are enough items in stock
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      toast.error('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    toast.success('Product Added to Cart')
  };

  return (
    <>
      <Layout title="Home Page">
        < Hero />
        <Carousel showThumbs={false} autoPlay>
        
        {featuredProducts.map((product) => (
          <div key = {product._id}>
            <Link className='flex' href = {`/product/${product.slug}`} passHref>
            <img src = {product.banner} alt={product.name} />
            </Link>
          </div>
        ))}
        </Carousel>
        <h2 className='h2 my-4'>Latest Products</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductItem
              key={product.slug}
              product={product}
              addToCartHandler={addToCartHandler}
            ></ProductItem>
          ))}
        </div>
        <About />
        < ContactForm/>
      </Layout>

    </>
  );
}

// this function runs before rendering component
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  const featuredProducts = await Product.find({isFeatured: true}).lean();
  return {
    props: {
      featuredProducts: featuredProducts.map(db.convertDocToObj),
      products: products.map(db.convertDocToObj),
    },
  };
}
