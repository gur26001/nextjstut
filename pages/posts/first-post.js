import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>FIRST POST</h1>
      go back to home <br />
      <Link href={"/"}>
        <a> {"<==="}</a>
      </Link>
    </Layout>
  );
}
