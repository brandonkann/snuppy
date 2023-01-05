import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <div>
        <Head>
          <title>{title ? title + ' - Snuppy' : 'Snuppy'}</title>
          <meta name="description" content="E-Commerce Website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex min-h-screen flex-col justify-between">
          <header>
            <nav className="flex h-12 px-4 justify-between shadow-md items-center">
              <Link className="text-lg font-bold" href="/">
                Snuppy
              </Link>

              <div>
                <Link className='p-2' href="/cart">Cart</Link>
                <Link className='p-2'href="/Login">Login</Link>
              </div>
            </nav>
          </header>
          <main className="container m-auto mt-4 px-4">{children}</main>
          <footer className="flex h-10 shadow-inner justify-center items-center">Copyright &copy 2022 Snuppy</footer>
        </div>
      </div>
    </>
  );
}
