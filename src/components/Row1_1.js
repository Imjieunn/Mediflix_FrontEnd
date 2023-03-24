import "../assets/styles/Row1_1.css";
import UserAreaChart from "./UserAreaChart";

export default function Row1_1() {
    return (
        <div className="row1_1_content">
            <div className="row1_1_content_1">
                <div className="row1_1_title">
                    <h3>서비스 방문수/유저수/활성사용자수</h3>
                </div>
                <button>지난주 그래프 겹쳐보기</button>
                <nav className="row1_1_graph_text">
                    <ul>
                        <div className="a">페이지 방문 횟수</div>
                        <div className="b">접속 유저 수</div>
                        <div className="c">시청 완주 수</div>
                    </ul>
                    </nav>

            </div>
            <div className="row1_1_content_2">
                <div className="chart">
                    <UserAreaChart/>
                </div>
            </div>
        </div>
    );
}