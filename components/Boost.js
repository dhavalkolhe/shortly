import styled from "styled-components";
import Image from "next/image";

import meteor from "../assets/Meteor.svg";

const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 750;
  font-size: 2.1rem;
  color: white;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary.cyan};
  border-radius: 30px;
  border: none;
  color: white;
  padding: 0.7rem 2.3rem;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 2px rgb(175, 238, 238);
  }
`;

const MainContainer = styled.div`
  ${"" /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MeteorCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* background-color: red; */}
  margin-top: -9rem;
  z-index: -1;
`;

function Boost() {
  return (
    <MainContainer>
      <Title>Boost your links today</Title>
      <Button>Get Started</Button>
      <MeteorCon>
        <Image src={meteor} alt="meteor" width={1800} height={220} />
      </MeteorCon>
    </MainContainer>
  );
}

export default Boost;
