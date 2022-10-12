import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <StyledLine
            initial={{ width: "0%" }}
            transition={{ duration: 0.75 }}
            animate={{ width: pathname === "/" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <StyledLine
            initial={{ width: "0%" }}
            transition={{ duration: 0.75 }}
            animate={{ width: pathname === "/work" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <StyledLine
            initial={{ width: "0%" }}
            transition={{ duration: 0.75 }}
            animate={{ width: pathname === "/contact" ? "40%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  color: white;
  padding: 1rem 8rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }

  #logo {
    font-family: "Lobster", cursive;
    font-weight: 2rem;
    font-weight: lighter;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
  li {
    padding-left: 8rem;
    position: relative;
  }
`;
const StyledLine = styled(motion.div)`
  background: #23d997;
  height: 0.5rem;
  width: 10%;
  position: absolute;
  bottom: -80%;
  left: 60%;
`;
export default Nav;
