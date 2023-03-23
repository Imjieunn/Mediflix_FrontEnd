import topContent from "../assets/imgs/topContent.png";
import topContent_week from "../assets/imgs/topContent_week.png";

export default function ChangeContent({ time }) {
    if (time == 'day') {
        return (
            <div className="row2_2_content_2">
                <div className="image"><img src={topContent} /></div>
                <div className="text">
                    <div className="title1">
                        ORIGINAL
                    </div>
                    <div className="title2">
                        척추닥터 김사부 ver.3<br />(with 김진성교수)
                    </div>
                    <div className="view">
                        조회수 382회
                    </div>
                </div>
            </div>
        );
    }
    else if (time == 'week') {
        return (
            <div className="row2_2_content_2">
                <div className="image"><img src={topContent_week} /></div>
                <div className="text">
                    <div className="title1">
                        ORIGINAL
                    </div>
                    <div className="title2">
                        Korea Disease Week 2023<br />Series
                    </div>
                    <div className="view">
                        조회수 856회
                    </div>
                </div>
            </div>
        );
    }
    else if (time == 'month') {
        return (
            <div className="row2_2_content_2">
                <div className="image"><img src={topContent} /></div>
                <div className="text">
                    <div className="title1">
                        ORIGINAL
                    </div>
                    <div className="title2">
                        척추닥터 김사부 ver.2<br />(with 김진성교수)
                    </div>
                    <div className="view">
                        조회수 5067회
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="row2_2_content_2">
                <div className="image"><img src={topContent} /></div>
                <div className="text">
                    <div className="title1">
                        ORIGINAL
                    </div>
                    <div className="title2">
                        척추닥터 김사부<br />(with 김진성교수)
                    </div>
                    <div className="view">
                        조회수 100379회
                    </div>
                </div>
            </div>
        );
    }
} 