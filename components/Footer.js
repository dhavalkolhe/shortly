import styled from "styled-components";
import Image from "next/image";

import logo from "../assets/logo.svg";
import fb from "../assets/icons-facebook.svg";
import twitter from "../assets/icons-twitter.svg";
import pintrest from "../assets/icons-pinterest.svg";
import insta from "../assets/icons-instagram.svg";

const MainContainer = styled.div`
  background-color: rgb(26, 17, 16);
  height: 15rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Social = styled.div`
  margin-right: 10rem;
`;
const Nav = styled.div`
  color: white;
  display: flex;
`;
const Links = styled.div``;
const NavItem = styled.div`
  margin: 1.5rem;
`;
const NavLink = styled.div`
  padding: 10px 0;
`;

function Footer() {
  return (
    <MainContainer>
      <Social>
        <Image src={logo} alt="logo" />
        <Links>
          <Image src={fb} alt="fb" />
          <Image src={twitter} alt="twitter" />
          <Image src={pintrest} alt="pin" />
          <Image src={insta} alt="insta" />
        </Links>
      </Social>
      <Nav>
        <NavItem>
          <h3>Features</h3>
          <NavLink>Link Shortening</NavLink>
          <NavLink>Branded Links</NavLink>
          <NavLink>Analytics</NavLink>
        </NavItem>
        <NavItem>
          <h3>Resources</h3>
          <NavLink>Blog</NavLink>
          <NavLink>Developers</NavLink>
          <NavLink>Support</NavLink>
        </NavItem>
        <NavItem>
          <h3>Company</h3>
          <NavLink>About</NavLink>
          <NavLink>Our Team</NavLink>
          <NavLink>Carrers</NavLink>
        </NavItem>
      </Nav>
    </MainContainer>
  );
}

export default Footer;
