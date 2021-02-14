import { NextPage } from 'next';
import Link from 'next/link';

import Page from 'components/Page';

const Dashboard: NextPage = () => {
  return (
    <Page pageTitle="Dashboard">
      <div className="w-screen h-screen bg-home bg-center bg-cover bg-no-repeat">
        <main className="w-full lg:container px-28 py-16 flex flex-col items-start">
          <h1 className="text-5xl font-bold text-white leading-normal">
            Acompanhamento de <br />
            Produtividade
          </h1>

          <h3 className="mt-16 font-semibold text-2xl text-white">Projetos</h3>

          <div className="mt-12 flex items-center gap-12 justify-items-start w-auto">
            <div
              className="w-36 h-36 bg-white rounded-3xl
                        flex items-stretch justify-center font-semibold
                        text-xl text-center italic"
            >
              <Link as="/projects/cidade-legal" href="/projects/[id]" passHref>
                <a className="flex items-center justify-center p-6">
                  Cidade Legal
                </a>
              </Link>
            </div>
            <div
              className="w-36 h-36 bg-white rounded-3xl
                        flex items-stretch justify-center font-semibold
                        text-xl text-center italic"
            >
              <Link
                as="/projects/portal-do-morador"
                href="/projects/[id]"
                passHref
              >
                <a className="flex items-center justify-center p-6">
                  Portal do Morador
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Page>
  );
};

export default Dashboard;
