import { NextPage } from 'next';
import Head from 'next/head';

interface IProps {
  pageTitle: string;
}

const Page: NextPage<IProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>Acompanhamento - {pageTitle}</title>
      </Head>

      <div>{children}</div>
    </>
  );
};

export default Page;
