import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "../../Components/Home/Banner/Banner";
import Gallery from "../../Components/Home/Gallery/Gallery";
import Notices from "../../Components/Home/Notices/Notices";
import About from "../../Components/Home/About/About";
import Blogs from "../../Components/Home/Blogs/Blogs";
import Contact from "../../Components/Home/Contact/Contact";
import Footer from "../../Components/Shared/Footer";
import Header from "../../Components/Shared/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Head>
        <title>Home</title>
        <meta name="description" content="Harvardian" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <About />
      <Gallery />
      <Notices />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
