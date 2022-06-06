import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import axios from "axios";
import List from "./List";

import peopleWorking from "../assets/peopleWorking.svg";
import meteor from "../assets/meteor.svg";

const Box = styled.div`
  ${"" /* border: 1px solid black; */}
  display: flex;
  margin-top: 0.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgCon = styled.div`
  ${"" /* border: 1px solid green; */}
  margin-top: -5.5rem;
  z-index: 0;
`;

const Heading = styled.div`
  ${"" /* border: 1px solid red; */}
  width: 50%;
  text-align: center;
  font-size: 3.7rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-wrap: wrap;
  ${"" /* letter-spacing: 0.2rem; */}
  color: ${(props) => props.theme.colors.neutral.grayishVoilet};
`;
const MainComponent = styled.div`
  width: 50%;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${"" /* border: 1px solid blue; */}
  height:fit-content;
  margin-top: -8rem;
  z-index: 5;
`;

const MeteorCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* background-color: red; */}
  margin-top: -7rem;
`;

const Input = styled.input`
  width: 75%;
  font-size: 110%;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary.cyan};
  border-radius: 3px;
  border: none;
  color: white;
  margin: 1rem;
  padding: 0.7rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 2px rgb(175, 238, 238);
  }
`;

function Shorten() {
  const [link, setLink] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = async () => {
    if (!link) {
      alert("Please Provide Link to Shorten");
    } else {
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((res) => {
          console.log(res.data.result.full_short_link);
          setList([
            ...list,
            {
              orignal: link,
              shortened: res.data.result.full_short_link,
              copied: false,
            },
          ]);
        })

        .then(() => {
          setLink("");
        })
        .catch(() => alert("API Request Failed :("), setLink(""));
    }
  };

  return (
    <Box>
      <Heading>MORE THAN JUST SHORTER LINKS</Heading>
      <ImgCon>
        <Image
          src={peopleWorking}
          alt="people-working"
          width={250}
          draggable={false}
        />
      </ImgCon>
      <MainComponent>
        <Input
          placeholder="Shorten a link here..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button onClick={handleSubmit}>Shorten it!</Button>
      </MainComponent>
      <MeteorCon>
        <Image src={meteor} alt="meteor" width={800} height={110} />
      </MeteorCon>
      <List list={list} setList={setList} />
    </Box>
  );
}

export default Shorten;
