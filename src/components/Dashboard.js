import React, { useEffect, useState } from 'react';

import Header from './Header';
import SidebarLeft from './SidebarLeft';
import TestSidebar from './TestSidebar'
import Row1_1 from './Row1_1';
import Row1_2 from './Row1_2';
import Row2_1 from './Row2_1';
import Row2_2 from './Row2_2';
import Row2_3 from './Row2_3';
import Row3_1 from './Row3_1';
import Row3_2 from './Row3_2';
import Row3_3 from './Row3_3';

const API = "http://13.124.122.107:8080/logs?selectDate=2023-03-24T06:02:24";

function Dashboard() {

    const [data, setData] = useState(null); // 기본값으로 빈 객체를 설정

    useEffect(() => {
        // 데이터를 가져오는 비동기 함수
        const fetchData = async () => {
            const response = await fetch(API);
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (

        <section className="box">
            <header className="header_wrapper">
                <Header />
            </header>
            <div className='next_sidebar'>
                <aside className='sidebar_wrapper'>
                    <SidebarLeft />
                </aside>
                <div>
                    <div className='content_row1'>
                        <div className='side_margin'></div>
                        <div className='row1_wrap'>
                            <div className='row1_1'><Row1_1 /></div>
                            <div className='row1_2'><Row1_2 visit={data.result.todayVisit} signIn={data.result.todaySignin}
                                mean={data.result.visitMean} watch={data.result.todayWatch} leave={data.result.todayLeave} /></div>
                        </div>
                        <div className='side_margin'></div>
                    </div>
                    <div className='content_row2'>
                        <div className='side_margin'></div>
                        <div className='row1_wrap'>
                            <div className='row2_1'><Row2_1 /></div>
                            <div className='row2_2'><Row2_2 /></div>
                            <div className='row2_3'><Row2_3 /></div>
                        </div>
                        <div className='side_margin'></div>
                    </div>

                    <div className='content_row3'>
                        <div className='side_margin'></div>
                        <div className='row1_wrap'>
                            <div className='row3_1'><Row3_1 /></div>
                            <div className='row3_2'><Row3_2 /></div>
                            <div className='row3_3'><Row3_3 /></div>
                        </div>
                        <div className='side_margin'></div>
                    </div>
                </div>
                <div className='sidebar2'>
                    <aside className='sidebar_wrapper'>
                        <TestSidebar />
                    </aside>
                </div>
            </div>
        </section>

    );
}

export default Dashboard;
