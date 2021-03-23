import styled, { keyframes, css } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Container = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.backImage});
  background-size: cover;
  position: relative;
  transition: background-image 1s ease-in-out;
`;
export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  position: absolute;
`;

/*Start Landing's content */
export const Description = styled.div`
  max-width: 500px;
  color: #fff;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h1 {
    font-size: 36px;
    span {
      color: ${(props) => props.colour};
    }
  }
  p {
    margin-top: 20px;
    line-height: 1.6;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: normal;
    font-family: "Roboto", sans-serif;
  }
`;
/*Start Landing's content */
