import styled from 'styled-components';
import profile from '../assets/imgs/profile.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-top: 15px;
`;

const Text = styled.div`
  font-size: 16px;
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const MyProfile = () => {
  return (
    <Wrapper>
      <Profile src={profile} />
      <div style={{ marginLeft: '8px' }}>
        <Text>최현아/주임</Text>
      </div>
    </Wrapper>
  );
};

export default MyProfile;
