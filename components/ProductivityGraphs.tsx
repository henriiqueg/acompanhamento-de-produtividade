import { NextPage } from 'next';
import { Bar } from 'react-chartjs-2';

const ProductivityGraphs: NextPage = () => {
  return (
    <>
      <div className="flex gap-12 items-center">
        {/* Gráfico 1 */}
        <div
          className=" bg-white text-black rounded-3xl
                        flex items-center justify-center font-semibold
                        text-xl p-8 pr-12"
        >
          <Bar
            width={400}
            height={250}
            data={{
              labels: ['Henrique', 'Eder', 'Edgar', 'Vosgale'],
              datasets: [
                {
                  barPercentage: 0.5,
                  maxBarThickness: 30,
                  minBarLength: 10,
                  data: [10, 20, 30, 40],
                  backgroundColor: ['#cc549c', '#5484cc', '#cc5454', '#ccc054'],
                },
              ],
            }}
            options={{
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: 'Gráfico de Time x Projeto',
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      padding: 15,
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: false,
                    ticks: {
                      autoSkip: false,
                      padding: 10,
                      fontStyle: '600',
                      fontColor: 'black',
                      fontSize: 10,
                    },
                  },
                ],
              },
            }}
          />
        </div>

        {/* Gráfico 2 */}
        <div
          className=" bg-pink-600 text-white rounded-3xl
                        flex items-center justify-center font-semibold
                        text-xl p-8"
        >
          <Bar
            width={400}
            height={250}
            data={{
              labels: ['Henrique', 'Eder', 'Edgar', 'Vosgale'],
              datasets: [
                {
                  barPercentage: 0.5,
                  maxBarThickness: 30,
                  minBarLength: 10,
                  data: [10, 20, 30, 40],
                  backgroundColor: ['#cc549c', '#5484cc', '#cc5454', '#ccc054'],
                },
              ],
            }}
            options={{
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: 'Gráfico de Hora por Dia',
                fontColor: 'white',
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: 'white',
                      beginAtZero: true,
                      padding: 15,
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: false,
                    ticks: {
                      autoSkip: false,
                      padding: 10,
                      fontStyle: '600',
                      fontColor: 'white',
                      fontSize: 10,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ProductivityGraphs;
