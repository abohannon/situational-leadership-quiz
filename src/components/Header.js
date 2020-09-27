import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: rgb(86, 198, 169);
  padding: 32px 16px;
  text-align: center;
  color: white;
`;

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <h1>{children}</h1>
    </StyledHeader>
  );
};

export default Header;
