import styled, { keyframes, css } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

/* Start Navbar */
export const Content = styled.div`
  color: #fff;
  display: flex;
  position: fixed;
  padding: 0px 90px 0px 90px;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.bold ? "#0008ff" : "transparent")};
  width: 100%;
  z-index: 10;
  height: 50px;
  .active {
    border-bottom: 4px solid ${(props) => props.colour};
  }
  a {
    :hover {
      color: ${(props) => props.colour};
    }
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const Ul = styled.ul`
  list-style: none;
  width: 100%;
  text-align: end;
  padding-top: 8px;
  height: 100%;
  line-height: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const IconBar = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  @media (min-width: 769px) {
    display: none;
  }
`;
export const Fabars = styled(FaBars)`
  font-size: 30px;
  &:active {
    opacity: 0.5;
  }
`;
export const ListBar = styled.li`
  display: inline-block;
  margin-left: 20px;

  height: 100%;
  @media (max-width: 768px) {
    display: block;
    padding: 10px 15px;
  }
`;
export const Logo = styled.p`
  width: 300px;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 23px;
  height: 100%;
  line-height: 50px;

  &::first-letter {
    color: ${(props) => props.colour};
    border-radius: 10px;
    padding: 2px 3px;
    font-size: 25px;

    margin-right: 1px;
  }
`;
export const LinkBar = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease-in-out;
  display: block;
  height: 100%;
  width: 100%;
  padding: 0 15px;
  transition: all 0.4s;
`;
/* End Navbar */
