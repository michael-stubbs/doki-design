import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";
import { GetStaticProps } from "next";
import Header from "../components/Title";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Footer from "../components/Footer";

interface HProps {
  content: Array<Object>;
}

export default function Home({ content }: HProps) {
  return (
    <div className="app">
      <Head>
        <title>Doki Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Fira+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <NavBar items={content} />
      <Main items={content} />
      <Footer />
    </div>
  );
}

// Pass the entire object array down to Main and Navbar
export const getStaticProps: GetStaticProps = async (context) => {
  const { collection } = await connectToDatabase();

  // Get all content items, must elimate _id to serialize
  // Key will be set within collection entries
  let content = await collection
    .find({}, { projection: { _id: 0 } })
    .toArray()
    .then((items) => {
      return items;
    });
  return {
    props: { content },
  };
};
