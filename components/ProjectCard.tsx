import { NextPage } from 'next';
import Link from 'next/link';

interface IProps {
  id: string;
  title: string;
}

const ProjectCard: NextPage<IProps> = ({ id, title }) => {
  return (
    <div
      className="w-36 h-36 bg-white rounded-3xl
                flex items-stretch justify-center font-semibold
                text-xl text-center italic text-black"
    >
      <Link as={`/projects/${id}`} href="/projects/[id]" passHref>
        <a className="flex items-center justify-center p-6">{title}</a>
      </Link>
    </div>
  );
};

export default ProjectCard;
