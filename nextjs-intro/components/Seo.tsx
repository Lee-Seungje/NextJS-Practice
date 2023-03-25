import { Head } from "next/document";

const Seo = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};
export default Seo;
