import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary.cyan};
  border-radius: 3px;
  border: none;
  color: white;
  margin: 1rem;
  padding: 0.5rem 1.7rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;
const CopiedButton = styled.button`
  background-color: ${(props) => props.theme.colors.neutral.veryDarkBlue};
  border-radius: 3px;
  border: none;
  color: white;
  margin: 1rem;
  padding: 0.5rem 1.1rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
`;
const Container = styled.div`
  width: 50%;
  ${"" /* border: 1px solid red; */}
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListItem = styled.div`
  ${"" /* border: 1px solid green; */}
  border: none;
  border-radius: 3px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin: 5px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const OrignaLink = styled.div`
  color: ${(props) => props.theme.colors.neutral.veryDarkBlue};
  font-size: 1.1rem;
  margin-left: 1rem;
  max-width: 20rem;
  word-wrap: break-word;
  white-space: wrap;
`;
const ShortendLink = styled.div`
  color: ${(props) => props.theme.colors.primary.cyan};
  ${
    "" /* &:hover {
    color: ${(props) => props.theme.colors.neutral.veryDarkBlue};
  } */
  }
`;
function List({ list, setList }) {
  const handleCopy = (item) => {
    navigator.clipboard.writeText(item.shortened);
    item.copied = true;
    setList([...list]);
  };

  return (
    <Container>
      {list.map((item) => {
        return (
          <ListItem key={item.orignal}>
            <OrignaLink>{item.orignal}</OrignaLink>
            <ShortendLink>
              <a href={item.shortened} target="_blank" without rel="noreferrer">
                {item.shortened}
              </a>
              {item.copied ? (
                <CopiedButton>Copied!</CopiedButton>
              ) : (
                <Button onClick={() => handleCopy(item)}>Copy</Button>
              )}
            </ShortendLink>
          </ListItem>
        );
      })}
    </Container>
  );
}

export default List;
