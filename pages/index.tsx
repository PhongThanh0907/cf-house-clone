import Banner from "../components/Banner";
import CloudTea from "../components/CloudTea";
import HomeStory from "../components/HomeStory";
import Layout from "../components/Layout";
import Product from "../components/Product";

export default function Home() {
  return (
    <Layout title="The Coffee House">
      <Banner />
      <Product />
      <CloudTea />
      <HomeStory />
    </Layout>
  );
}
