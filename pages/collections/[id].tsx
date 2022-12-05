import { useRouter } from "next/router";
import React from "react";
import ItemCollection from "../../components/ItemCollection";
import Layout from "../../components/Layout";
import { useFetch } from "../../hooks/useFetch";
import { Product } from "../../types/product";

const CollectionPage = () => {
  const router = useRouter();
  const { query } = router;
  const {
    data: products,
    // isLoading,
    // error,
  } = useFetch("products/", query.typeProduct);
  console.log(query);
  console.log(products);
  return (
    <div>
      <Layout title="Cà phê tại nhà">
        <h1 className="px-4 max-w-7xl mx-auto py-10 text-2xl font-semibold">
          {query.typeProduct === "cfathome" ? "Cà Phê Tại Nhà" : "Trà Tại Nhà"}
        </h1>
        <div className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-4 max-w-7xl mx-auto gap-8 gap-y-4 lg:pb-6">
          {products.map((item: Product) => (
            <div key={item._id}>
              <ItemCollection
                img={item.imageProduct}
                name={item.nameProduct}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default CollectionPage;
