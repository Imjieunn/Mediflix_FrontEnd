import "../assets/styles/Row3_2.css";
import { Space, Switch } from 'antd';
import { BgColorsOutlined } from "@ant-design/icons";
import { Chart } from "chart.js";
// import { Chart } from "react-chartjs-2";
import React, { useState, useEffect } from 'react';
import { AbortedDeferredError } from "react-router-dom";

export default function Row3_2() {
    const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
    };
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
    });
    ctx.chart = myChart;



    return (
        <div className="row3_2_content" >
            <div className="row3_2_content_1">
                <div className="row3_2_title">
                    <h3>의학 전공별 비중</h3>
                </div>
                <div className="scrollbutton">
                    <Space direction="vertical">
                        <Switch
                            checkedChildren="회원"
                            unCheckedChildren="콘텐츠"
                            defaultChecked
                        />
                    </Space>
                </div>
            </div>
            <div className="row3_2_content_2">
                <div className='chart'>
                    <canvas id="myChart"></canvas>
                </div>
                <div className='chart_text'>설명</div>
            </div>
        </div>
    );
}