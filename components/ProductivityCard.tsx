import { NextPage } from 'next';

interface IProps {
  teamProductivity: number;
  hourDayProductivity: number;
}

const ProductivityCard: NextPage<IProps> = ({
  teamProductivity,
  hourDayProductivity,
}) => {
  return (
    <>
      {/* Cards Índice */}
      <div className="flex gap-12 items-center">
        {/* Card Time x Projeto */}
        <div
          className="w-full max-w-sm h-36 bg-white text-black rounded-3xl
                        flex items-center justify-center font-semibold
                        text-xl p-8"
        >
          <p className="text-8xl font-black mr-4">{teamProductivity}</p>
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg font-bold italic leading-tight mb-1">
              Índice de Produtividade
            </p>
            <span className="text-base font-light italic leading-normal">
              Time x Projeto
            </span>
          </div>
        </div>

        {/* Card Hora por Dia */}
        <div
          className="w-full max-w-md h-36 bg-pink-600 text-white rounded-3xl
                        flex items-center justify-center font-semibold
                        text-xl p-8"
        >
          <p className="text-8xl font-black mr-4">{hourDayProductivity}</p>
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg font-bold italic leading-tight mb-1">
              Índice de Produtividade
            </p>
            <span className="text-base font-light italic leading-normal">
              Hora por dia
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductivityCard;
