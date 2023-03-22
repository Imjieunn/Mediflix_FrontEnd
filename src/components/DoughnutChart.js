import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 19, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        const options = {
            plugins: {
                legend: {
                    display: false,
                },
            },
        };

        // 이전 차트 제거
        const canvas = document.getElementById('myChart');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        const oldChart = canvas.chart;
        if (oldChart) {
            oldChart.destroy();
        }

        // 새로운 차트 생성
        const newChart = new Doughnut(canvas, {
            data: data,
            options: options,
        });
        canvas.chart = newChart;

        setChartData(data);
    }, []);

    return <canvas id="myChart" />;
    // return <div> hello </div>;
};

export default DoughnutChart;
