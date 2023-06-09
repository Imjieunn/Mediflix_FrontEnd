import mediflix from "../assets/imgs/mediflix.png";
import logo from "../assets/imgs/logo.png";
import "../assets/styles/Header.css";
import "../App.css";
import { RightOutlined } from "@ant-design/icons"

export default function Header() {
    return (
        <header className="header">
            <div className="title">
                <img src={logo} className="logo"></img>
                <img src={mediflix} className="medi_title"></img>
            </div>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="https://mediflix.co.kr/"><RightOutlined />메디플릭스</a></li>
                    <li className="nav__item"><a href="http://www.donga-st.com/Main.da"><RightOutlined />동아ST</a></li>
                </ul>
            </nav>
        </header>
    );
}