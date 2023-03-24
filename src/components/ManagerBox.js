import React from 'react';
import styled from 'styled-components';
import profile from '../assets/imgs/profile.png';

const SmallBoxWrapper = styled.div`
    width: 230px;
    height: 297px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 60px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-left: 10px;
  padding: 5px;
`;

const Icon = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

const CheckCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: red;
  margin-left: auto;
`;

const OnOffline = styled.div`
    display: flex;
    margin-left: 30px;
    font-size: 12px;
    color: #999999;
`

function SmallBox() {
  return (
    <SmallBoxWrapper>
      <b>관리자 목록</b>
      <IconWrapper>
        <Icon src={profile} alt="icon1" />
        <div>박세은 / 주임</div>
        <OnOffline>
         <CheckCircle/>
         ON
        </OnOffline>
      </IconWrapper>
      
      <IconWrapper>
        <Icon src={profile} alt="icon2" />
        <div>강은영 / 팀장</div>
        <OnOffline>
         <CheckCircle/>
         ON
        </OnOffline>
      </IconWrapper>
      <IconWrapper>
        <Icon src={profile} alt="icon3" />
        <div>손현석 / 주임</div>
        <OnOffline>
          30분전
        </OnOffline>
      </IconWrapper>
      <IconWrapper>
        <Icon src={profile} alt="icon4" />
        <div>이지수 / 주임</div>
        <OnOffline>
          10분전
        </OnOffline>
      </IconWrapper>
    </SmallBoxWrapper>
  );
}

export default SmallBox;
