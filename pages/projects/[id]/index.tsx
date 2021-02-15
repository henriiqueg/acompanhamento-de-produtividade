import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Page from 'components/Page';
import ProductivityCard from 'components/ProductivityCard';
import ProductivityGraphs from 'components/ProductivityGraphs';
import AddTask from 'components/AddTask';
import AddMember from 'components/AddMember';
import DailyUpdate from 'components/DailyUpdate';

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
      <div className="w-screen h-screen bg-project bg-center bg-cover bg-no-repeat">
        <div className="absolute right-16 top-16 flex flex-row gap-8">
          <AddTask />
          <AddMember />
          <DailyUpdate />
        </div>
        <main className="w-full lg:container px-28 py-16 flex flex-col items-start">
          <Link href="/" passHref>
            <a className="text-white">{'< '}Projetos</a>
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
