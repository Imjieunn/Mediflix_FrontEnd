import topContent2 from "../assets/imgs/topContent2.png";
import topContent2_week from "../assets/imgs/topContent2_week.png";
import topContent2_month from "../assets/imgs/topContent2_month.png";
import topContent3 from "../assets/imgs/topContent3.png";

export default function ChangeContent2({ time }) {
    if (time == 'day') {
        return (
            <div className="row2_2_content_3">
                <div className="line">
                    <div className="image"><img src={topContent2} /></div>
                    <div className="text">VOD | 염증성 요통의 감별 | 박성수 | 조회수 100회</div>
                </div>
                <div className="line">
                    <div className="image"><img src={topContent3} /></div>
                    <div className="text">VOD | 유방암 호르몬 테라피 | 김정빈 | 조회수 100회</div>
                </div>
            </div>
        );
    }
    else if (time == 'week') {
        return (
            <div className="row2_2_content_3">
                <div className="line">
                    <div className="image"><img src={topContent2_week} /></div>
                    <div className="text">VOD | 불면증, 약 없이 치료하기 | 정석훈 | 조회수 700회</div>
                </div>
                <div className="line">
                    <div className="image"><img src={topContent3} /></div>
                    <div className="text">VOD | 유방암 호르몬 테라피 | 김정빈 | 조회수 700회</div>
                </div>
            </div>
        );
    }
    else if (time == 'month') {
        return (
            <div className="row2_2_content_3">
                <div className="line">
                    <div className="image"><img src={topContent2_month} /></div>
                    <div className="text">VOD | 갑상선암의 진단 및 치료_1 | 김경진 |<br />조회수 2000회</div>
                </div>
                <div className="line">
                    <div className="image"><img src={topContent3} /></div>
                    <div className="text">VOD | 유방암 호르몬 테라피 | 김정빈 | 조회수 2000회</div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="row2_2_content_3">
                <div className="line">
                    <div className="image"><img src={topContent2} /></div>
                    <div className="text">VOD | 염증성 요통의 감별 | 박성수 | 조회수 10000회</div>
                </div>
                <div className="line">
                    <div className="image"><img src={topContent3} /></div>
                    <div className="text">VOD | 유방암 호르몬 테라피 | 김정빈 | 조회수 10000회</div>
                </div>
            </div>
        );
    }

}