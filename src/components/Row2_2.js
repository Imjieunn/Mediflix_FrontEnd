import "../assets/styles/Row2_2.css";
import { useState } from 'react';
import topContent from "../assets/imgs/topContent.png";
import topContent2 from "../assets/imgs/topContent2.png";
import topContent3 from "../assets/imgs/topContent3.png";
import ChangeContent from "./ChangeContent";
import ChangeContent2 from "./ChangeContent2";
import { style } from "@mui/system";

export default function Row2_2() {

    // let name = ['일간', '주간', '월간', '연간'];
    let name = [{ name: '일간', en: 'day' }, { name: '주간', en: 'week' },
    { name: '월간', en: 'month' }, { name: '연간', en: 'year' }]

    let [btnActive, setBtnActive] = useState("");
    const toggleActive = (e) => {
        setBtnActive(e.target.value);
    }

    const [time, setTime] = useState("week");

    return (
        <div className="row2_2_content">
            <div className="row2_2_content_1">
                <div className="row2_2_title">
                    <h3>조회수 TOP 콘텐츠</h3>
                </div>
                <div className="row2_2_content_1_button">
                    {name.map((item, idx) => {
                        return (
                            <>
                                <button
                                    value={idx}
                                    className={"btn" + (idx == btnActive ? "active" : "")}
                                    onClick={(e) => {
                                        toggleActive(e);
                                        setTime(item.en)
                                    }}>
                                    {item.name}
                                </button></>)
                    })}
                </div>
            </div>
            <ChangeContent time={time} />
            <ChangeContent2 time={time} />
        </div>
    );
}