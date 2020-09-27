import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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

const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  color: #a9a9a9;
  height: 100%;
  flex: 1;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footnote = styled.div`
  margin-top: auto;
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
      <Details>
        <DetailItem>
          <span>Correct answers </span>
          <span>+$5</span>
        </DetailItem>
        <DetailItem>
          <span>Incorrect answers </span>
          <span>-$25</span>
        </DetailItem>
        <DetailItem>
          <span>Streak of 5 correct answers </span>
          <span>+$15</span>
        </DetailItem>
        <Footnote>
          The ideal praise-to-criticism ratio is approx. 5:1.{" "}
          <a
            href="https://hbr.org/2013/03/the-ideal-praise-to-criticism"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more about the research here.
          </a>
        </Footnote>
      </Details>
    </Container>
  );
};

export default Sidebar;
