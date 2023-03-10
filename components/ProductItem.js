/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5 bg-gray-100">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-xl text-gray-800 text-bold">{product.name}</h2>
        </Link>
        <p className="py-2">${product.price} per class</p>
        <button onClick={() => addToCartHandler(product)} className="primary-button" type="button">
          Add to cart 
        </button>
      </div>
    </div>
  );
}
