import { NextPage } from 'next';

import Page from 'components/Page';
import ProjectCard from 'components/ProjectCard';
import AddProject from 'components/AddProject';

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
            <ProjectCard id="cidade-legal" title="Cidade Legal" />
            <ProjectCard id="portal-do-morador" title="Portal do Morador" />
            <AddProject />
          </div>
        </main>
      </div>
    </Page>
  );
};

export default Dashboard;
