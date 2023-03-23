import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.defaults.color = 'black';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const options = {
    responsive: false,
    plugins: {
        legend: {
            position: 'top',
            display: true,
            text: 'Chart.js Bar Chart',
        },
        // scales: {
        //     grid: {
        //         display: false
        //     }
        // }
    },
};

const labels = ['서울', '경기', '강원', '경남', '전북', '경북', '부산', '전남'];

const data = {
    labels,
    datasets: [
        {
            label: '일간 접속 유저의 평균 시청기간',
            data: [60, 50, 10, 20, 40, 30, 45, 55],
            backgroundColor: ['#FF0000', '#999999', '#FF0000', '#FF0000', '#999999', '#999999', '#FF0000', '#999999'],
        },
    ],
};

const data2 = {
    labels,
    datasets: [
        {
            label: '신규 유저의 평균 시청기간',
            data: [80, 50, 10, 20, 40, 30, 45, 55],
            backgroundColor: ['#FF0000', '#999999', '#FF0000', '#FF0000', '#999999', '#999999', '#FF0000', '#999999'],
        },
    ],
};

export default function BarChart({ num }) {
    if (num == '1') {
        return <Bar options={options} data={data} style={{ width: "90%", height: "100%" }} />;
    }
    else {
        return <Bar options={options} data={data2} style={{ width: "90%", height: "100%" }} />;
    }
}
