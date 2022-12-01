import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Scarlett" : "Scarlett"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex items-center h-12 px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              Scarlett
            </Link>

            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex flex-col py-4 h-20 justify-center items-center shadow-inner">
          <p>Copyright © 2022 </p>
          <p> Built by ScarlettCoder</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
