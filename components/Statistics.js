import styled from "styled-components";
import Image from "next/image";

import brand from "../assets/icon-brand-recognition.svg";

const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 750;
  color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
  display: flex;
  justify-content: center;
  font-size: 2.1rem;
`;
const Subtitle = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.neutral.grayishViolet};
  ${"" /* border: 1px solid green; */}
  width: 65%;
  text-align: center;
  font-weight: 600;
  margin-top: -1rem;
`;

const TextCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BranchRecognition = styled.p`
  display: flex;
  flex-direction: column;
  ${"" /* border: 1px solid red; */}
  width: 18rem;
  padding: 1.5rem;
  padding-bottom: 3rem;
  margin-top: 6rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
`;
const BTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
  margin-top: 1rem;
  font-size: 1.1rem;
`;
const BSubtitle = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.neutral.grayishViolet};
  ${"" /* border: 1px solid green; */}
  margin-top: 1rem;
  width: 100%;
  font-weight: 600;
`;

const ImgCon = styled.div`
  ${"" /* border: 1px solid red; */}
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -4rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary.darkViolet};
`;

const BrandCon = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Connector = styled.div`
  width: 15%;
  margin-top: 0.8rem;
  height: 8px;
  background-color: ${(props) => props.theme.colors.primary.cyan};
`;

function Statistics() {
  return (
    <MainContainer>
      <TextCon>
        <Title>Advanced Statistics</Title>
        <Subtitle>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </Subtitle>
      </TextCon>
      <BrandCon>
        <BranchRecognition>
          <ImgCon>
            <Image
              src={brand}
              alt="brand"
              width={35}
              draggable={false}
            />
          </ImgCon>
          <BTitle>Brand Recognition</BTitle>
          <BSubtitle>
            Boost your branch recognition with each click. Generic Links dont
            mean a thing. Branded links helps instill confidence in your
            content.
          </BSubtitle>
        </BranchRecognition>
        <Connector />
        <BranchRecognition>
          <ImgCon>
            <Image
              src={brand}
              alt="brand"
              width={35}
              draggable={false}
            />
          </ImgCon>
          <BTitle>Brand Recognition</BTitle>
          <BSubtitle>
            Boost your branch recognition with each click. Generic Links dont
            mean a thing. Branded links helps instill confidence in your
            content.
          </BSubtitle>
        </BranchRecognition>
        <Connector />
        <BranchRecognition>
          <ImgCon>
            <Image src={brand} alt="brand" width={35} draggable={false} />
          </ImgCon>
          <BTitle>Brand Recognition</BTitle>
          <BSubtitle>
            Boost your branch recognition with each click. Generic Links dont
            mean a thing. Branded links helps instill confidence in your
            content.
          </BSubtitle>
        </BranchRecognition>
      </BrandCon>
    </MainContainer>
  );
}

export default Statistics;
