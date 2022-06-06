import styled from "styled-components";
import Image from "next/image";

import logo from "../assets/logo.svg";

const Box = styled.div`
  ${"" /* background-color: ${(props) => props.theme.colors.primary.cyan}; */}
  margin-top: 1.4rem;
  display: flex;
`;

const Nav = styled.div`
  display: flex;
  ${"" /* background-color: ${(props) => props.theme.colors.secondary.red}; */}
  margin-left: 2rem;
  justify-content: space-between;
  align-items: center;
  width: 14rem;
`;
const NavItem = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutral.gray};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
  }
`;

const LogoContainer = styled.div`
  margin-left: 15%;
`;

function Header() {
  return (
    <Box>
      <LogoContainer>
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={30}
          draggable={false}
        />
      </LogoContainer>
      <Nav>
        <NavItem>Features</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Resources</NavItem>
      </Nav>
    </Box>
  );
}

export default Header;
