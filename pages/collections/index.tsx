import Link from "next/link";
import React from "react";
import ItemCollection from "../../components/ItemCollection";
import Layout from "../../components/Layout";
import img1 from "../../public/assets/collection1.webp";

type Props = {};

const CollectionPage = (props: Props) => {
  const listCafeCollection = [
    {
      title: "Thùng Cà Phê Sữa Espresso",
      price: 33600,
      link: "/detail",
      image: img1,
    },
    {
      title: "Combo 6 Lon Cà Phê Sữa Espresso",
      price: 84000,
      link: "/detail",
      image: img1,
    },
    {
      title: "Cà Phê Rang Xay Original 1 Túi 1KG",
      price: 235000,
      link: "/detail",
      image: img1,
    },
    {
      title: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G",
      price: 99000,
      link: "/detail",
      image: img1,
    },
    {
      title: "Cà Phê Sữa Đá Hòa Tan (10 gói x 22g)",
      price: 60000,
      link: "/detail",
      image: img1,
    },
    {
      title: "Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)",
      price: 44000,
      link: "/",
      image: img1,
    },
    {
      title: "Cà Phê Sữa Đá Hòa Tan Túi 25x22G",
      price: 99000,
      link: "/detail",
      image: img1,
    },
    { title: "Cà Phê Sữa Đá Pack 6 Lon", price: 84000, link: "/", image: img1 },
    {
      title: "Thùng 24 Lon Cà Phê Sữa Đá",
      price: 336000,
      link: "/detail",
      image: img1,
    },
  ];

  return (
    <Layout title="Cà phê tại nhà">
      <h1 className="px-4 max-w-7xl mx-auto py-10 text-2xl font-semibold">
        Cà Phê Tại Nhà
      </h1>
      <div className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-4 max-w-7xl mx-auto gap-8 space-y-4">
        {listCafeCollection.map((item, index) => (
          <Link key={index} href={item.link}>
            <ItemCollection
              img={item.image}
              name={item.title}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default CollectionPage;
