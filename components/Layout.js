import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Navbar';
import Footer from '../components/Footer';

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

        <ToastContainer position="bottom-center" hideProgressBar={true} autoClose={200} limit={1} />

        <div className="flex min-h-screen flex-col justify-between">
          <header>
            <NavBar />

          </header>
          <main className="container m-auto mt-4 px-4">{children}</main>
          < Footer />
          <footer className="flex h-10 shadow-inner justify-center items-center">
            Copyright &copy; 2022 Snuppy
          </footer>
        </div>
      </div>
    </>
  );
}
