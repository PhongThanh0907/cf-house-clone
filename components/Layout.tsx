import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MenuHeader from "./MenuHeader";
import StickyRight from "./StickyRight";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>
          {title ? title + " - Delivery 1800.100" : "Delivery 1800.100"}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
        <MenuHeader />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
      <section className="hidden lg:inline fixed bottom-24 right-4">
        <StickyRight />
      </section>
    </>
  );
};

export default React.memo(Layout);
