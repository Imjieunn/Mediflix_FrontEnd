import "../assets/styles/Row3_3.css";
import { Space, Switch } from 'antd';
import { useState } from 'react';
import ChangeBarChart from "./changeBarChart";

export default function Row3_3() {

    const [checked, setChecked] = useState(true);
    const onChange = () => {
        setChecked(!checked);
    }

    return (
        <div className="row3_3_content" >
            <div className="row3_3_content_1">
                <div className="row3_3_title">
                    <h3>지역별 비교</h3>
                </div>
                {/* <div className="row3_3_subtitle">일간 접속 유저의 평균 시청기간</div> */}
                <div className="scrollbutton">
                    <Space direction="vertical">
                        <Switch
                            checkedChildren="신규"
                            unCheckedChildren="유저"
                            onClick={onChange}
                        />
                    </Space>
                </div>
            </div>
            <div className="row3_3_content_2">
                <ChangeBarChart check={checked} />
            </div>

        </div>
    );
}