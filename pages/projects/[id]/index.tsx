import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Page from 'components/Page';
import ProductivityCard from 'components/ProductivityCard';
import ProductivityGraphs from 'components/ProductivityGraphs';

const Project: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  const title =
    id
      ?.toString()
      .split('-')
      .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
      .join(' ') || '-';

  return (
    <Page pageTitle={title}>
      <div className="w-screen h-screen bg-home bg-center bg-cover bg-no-repeat">
        <main className="w-full lg:container px-28 py-16 flex flex-col items-start">
          <Link href="/" passHref>
            <a className="text-white">{'< '}Dashboard</a>
          </Link>
          <h1 className="text-5xl font-bold text-white leading-normal max-w-lg">
            {title}
          </h1>

          {/* Índices Container */}
          <div className="mt-16">
            <h3 className="mb-8 font-semibold text-2xl text-white">Índices</h3>

            <ProductivityCard
              teamProductivity={1.13}
              hourDayProductivity={4.23}
            />
          </div>

          {/* Gráficos Container */}
          <div className="mt-16">
            <h3 className="mb-8 font-semibold text-2xl text-white">Gráficos</h3>

            {/* Gráficos */}
            <ProductivityGraphs />
          </div>
        </main>
      </div>
    </Page>
  );
};

export default Project;
