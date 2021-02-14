import { NextPage } from 'next';

const AddProject: NextPage = () => {
  return (
    <div
      className="w-36 h-36 bg-pink-600 rounded-3xl
                flex items-stretch justify-center font-semibold
                text-xl text-center italic"
    >
      {/* TODO add chakra Modal */}
      <button
        type="button"
        className="w-full flex items-center justify-center p-6 text-7xl text-white"
      >
        +
      </button>
    </div>
  );
};

export default AddProject;
