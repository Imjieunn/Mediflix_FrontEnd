import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: '7일전', '페이지 방문 횟수': 123, '접속 유저 수': 78, '시청 완주 수': 20 },
  { name: '6일전', '페이지 방문 횟수': 130, '접속 유저 수': 73, '시청 완주 수': 30 },
  { name: '5일전', '페이지 방문 횟수': 167, '접속 유저 수': 60, '시청 완주 수': 43 },
  { name: '4일전', '페이지 방문 횟수': 782, '접속 유저 수': 503, '시청 완주 수': 102 },
  { name: '3일전', '페이지 방문 횟수': 210, '접속 유저 수': 114, '시청 완주 수': 32 },
  { name: '2일전', '페이지 방문 횟수': 340, '접속 유저 수': 135, '시청 완주 수': 18 },
  { name: '1일전', '페이지 방문 횟수': 324, '접속 유저 수': 143, '시청 완주 수': 74 },
  
];

function UserAreaChart() {
  return (
    <AreaChart width={800} height={200} data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <Tooltip />
      <Area dataKey="페이지 방문 횟수" stroke="#FF000033" fill="#FF000033" />
      <Area dataKey="접속 유저 수" stroke="#FF000066" fill="#FF000066" />
      <Area dataKey="시청 완주 수" stroke="#FF0000" fill="#FF0000" />
    </AreaChart>
  );
}

export default UserAreaChart;
