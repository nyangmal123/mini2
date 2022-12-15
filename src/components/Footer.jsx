import React from 'react';
import styled from 'styled-components';

const FBox = styled.footer`
  max-width: 1200px;
  min-width: 800px;
  /* color: #c5894067; */
  background-color: #c58940;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'IBMPlexSansKR-Regular';
`;

function Footer({ children }) {
  return <FBox>{children}</FBox>;
}

export default Footer;
