import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import GlobalStyle from 'components/Common/GlobalStyles';
import Footer from 'components/Common/Footer';
import Introduction from 'components/Main/Introduction';
import CategoryList from 'components/Main/CategoryList';

const CATEGOTY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const IndexPage: FunctionComponent = () => {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGOTY_LIST} />
      <Footer />
    </Container>
  );
};

export default IndexPage;
