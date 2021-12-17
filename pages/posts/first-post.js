import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>FIRST POST</h1>
      go back to home <br />
      <Link href={"/"}>
        <a> {"<==="}</a>
      </Link>
    </>
  );
}
