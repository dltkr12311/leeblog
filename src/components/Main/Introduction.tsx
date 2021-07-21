import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from 'components/Main/ProfileImage';

const Background = styled.div`
  width: 100%;
  background-color: #9e8fb2;
  background-image: linear-gradient(315deg, #9e8fb2 0%, #a7acd9 74%);
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
`;

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />

        <div>
          <SubTitle>안녕하세요!</SubTitle>
          <Title>프론트엔드 개발자 이삭입니다.</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
