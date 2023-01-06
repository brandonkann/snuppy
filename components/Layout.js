import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import React, { useContext, useState } from 'react';
import { Store } from '../utils/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import Cookies from 'js-cookie';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const {state, dispatch} = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({type: 'CART_RESET'})
    signOut( {callbackUrl: '/login'})

  }
  return (
    <>
      <div>
        <Head>
          <title>{title ? title + ' - Snuppy' : 'Snuppy'}</title>
          <meta name="description" content="E-Commerce Website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ToastContainer position="bottom-center" limit={1} />

        <div className="flex min-h-screen flex-col justify-between">
          <header>
            <nav className="flex h-12 px-4 justify-between shadow-md items-center">
              <Link className="text-lg font-bold" href="/">
                Snuppy
              </Link>

              <div>
                <Link className="p-2" href="/cart">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
                {status === 'loading' ? (
                  'Loading'
                ) : session?.user ? (
                  <Menu as="div" className="relative inline-block">
                    <Menu.Button className="text-blue-600">
                      {session.user.name}
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                      <Menu.Item>
                        <DropdownLink className="dropdown-link" href="/profile">Profile</DropdownLink>
                      </Menu.Item>
                      <Menu.Item>
                        <DropdownLink className="dropdown-link" href="/order-history">Order History</DropdownLink>
                      </Menu.Item>
                      <Menu.Item>
                       <a className='dropdown-link' href= "#" onClick={logoutClickHandler}>Logout</a>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                ) : (
                  <Link className="p-2" href="/login">
                    {' '}
                    Login
                  </Link>
                )}
              </div>
            </nav>
          </header>
          <main className="container m-auto mt-4 px-4">{children}</main>
          <footer className="flex h-10 shadow-inner justify-center items-center">
            Copyright &copy 2022 Snuppy
          </footer>
        </div>
      </div>
    </>
  );
}
