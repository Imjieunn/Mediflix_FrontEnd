import "../assets/styles/Row3_2.css";
import { Space, Switch } from 'antd';
import { BgColorsOutlined } from "@ant-design/icons";
import { Colors } from "chart.js";
import DoughnutChart from "./DoughnutChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data1 = {
    labels: ['신경의학과', '정형외과', '가정의학과', '소화기내과', '내분비내과', '류마티스내과'],
    datasets: [
        {
            label: '%',
            data: [23, 13, 16, 14, 20, 14],
            backgroundColor: [
                '#FF0000',
                '#FA7B7B',
                '#F9ACAC',
                '#D9B9D9',
                '#D9D9D9',
                '#FFFFFF',
            ],
            borderColor: [
                'gray'
            ],
            borderWidth: 0.2,
            cutout: "80%"
        },
    ],
};
const data2 = {
    labels: ['신경의학과', '정형외과', '가정의학과', '소화기내과', '내분비내과', '류마티스내과'],
    datasets: [
        {
            label: '%',
            data: [28, 28, 12, 19, 10, 2],
            backgroundColor: [
                '#FF0000',
                '#FA7B7B',
                '#F9ACAC',
                '#D9B9D9',
                '#D9D9D9',
                '#FFFFFF',
            ],
            borderColor: [
                'gray'
            ],
            borderWidth: 0.2,
            cutout: "80%"
        },
    ],
};
const option1 = {
    plugins: {
        legend: { //범례 스타일링
            display: true,
            labels: {
                color: 'black',
                usePointStyle: true,
                font: {
                    size: 7,
                }
            }
        },
        title: {
            position: 'bottom',
            display: 'true',
            text: 'MEDIFLIX 회원의 전공별 분포',
            color: 'black',
            padding: {
                bottom: 0,
                top: 10
            }
        }
    }
}
const option2 = {
    plugins: {
        legend: { //범례 스타일링
            display: true,
            labels: {
                color: 'black',
                usePointStyle: true,
                font: {
                    size: 7,
                }
            }
        },
        title: {
            position: 'bottom',
            display: 'true',
            text: 'MEDIFLIX 전공별 콘텐츠의 개수',
            color: 'black',
            padding: {
                bottom: 0,
                top: 10
            }
        }
    }
}

export default function Row3_2() {
    return (
        <div className="row3_2_content" >
            <div className="row3_2_content_1">
                <div className="row3_2_title">
                    <h3>의학 전공별 비중</h3>
                </div>
                {/* <div className="scrollbutton">
                    <Space direction="vertical">
                        <Switch
                            checkedChildren="회원"
                            unCheckedChildren="콘텐츠"
                            defaultChecked
                        />
                    </Space>
                </div> */}
            </div>
            <div className="row3_2_content_2">
                <div className='chart'><DoughnutChart data={data1} option={option1} /></div>
                <div className='chart'><DoughnutChart data={data2} option={option2} /></div>
            </div>
        </div>
    );
}