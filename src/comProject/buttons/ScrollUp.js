import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";

const moveIc = keyframes`
0%{
  bottom: 0px;
  opacity: 0.5
}
100%{
  bottom: 20px;
  opacity: 1
}`;
const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${(props) => props.colour};
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.5s;
  animation: ${moveIc} 0.4s;
`;

function ScrollUp({ colour }) {
  const [appear, setAppear] = useState(false);
  const showButton = () => {
    if (window.scrollY > 50) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  };
  window.addEventListener("scroll", showButton);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return appear ? (
    <Button onClick={scrollUp} colour={colour}>
      <MdKeyboardArrowUp size="40px" />
    </Button>
  ) : (
    <></>
  );
}

export default ScrollUp;
