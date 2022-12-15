import React from 'react';
import styled from 'styled-components';

const HBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  font-size: 30px;
  /* color: #c5894067; */
  background-color: #c58940;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'IBMPlexSansKR-Regular';
`;

function Header({ children }) {
  return <HBox>{children}</HBox>;
}
export default Header;
