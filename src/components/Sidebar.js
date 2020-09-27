import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 300px;
  margin: 2.5rem auto;
  background: #fff;
  border-radius: 3px;
  padding: 1.5rem 2.5rem 1.5rem 2.5rem;
`;

const BankIcon = styled.div`
  font-size: 4rem;
`;

const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Balance = styled.h2`
  color: ${({ balance }) => (balance > 0 ? "#2bbf74" : "#d33847")};
`;

const Streak = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sidebar = ({ balance, streak }) => {
  return (
    <Container>
      <h3>Relational Bank Account</h3>
      <Account>
        <BankIcon>🏦</BankIcon>
        <Balance balance={balance}>${balance}</Balance>
      </Account>
      <Streak>
        <h3>Current streak: </h3>
        <h3>{streak}</h3>
      </Streak>
    </Container>
  );
};

export default Sidebar;
