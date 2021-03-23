import styled, { keyframes, css } from "styled-components";
import { BsFillGearFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

/*keyframes */
const rotateIcon = keyframes`
0%{
  transform: rotate(0)
}
100%{
  transform: rotate(360deg)
}`;
/*Start Settings Box  */
export const ListSettings = styled.div`
  width: 200px;
  height: calc(100vh - 60px);
  background-color: rgb(51 51 51 / 71%);
  position: fixed;
  top: 60px;
  z-index: 1;
  transition: left 1s;
  left: ${(props) => (props.open ? "0" : "-200px")};
`;
export const IconSetting = styled(BsFillGearFill)`
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 80vh;
  left: 220px;
  transition: all 1s;
  ${(props) =>
    props.open &&
    css`
      animation: ${rotateIcon} 3s infinite linear;
    `}
  /* display: ${(props) => (props.open ? "none" : "block")}; */
  &:hover {
    color: #ddd;
  }
  &:active {
    color: #999;
  }
`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
`;
/*End Settings Box  */

export const Options = styled.div`
  margin-top: 40px;
  padding: 0 5px;
`;
export const Block = styled.div`
  background-color: #ddd;
  padding: 10px;
  margin-bottom: 3px;
`;
export const Title = styled.h3`
  color: #111;
  margin: 0 auto 20px;
  text-align: center;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Color = styled.li`
  width: 28px;
  height: 28px;
  /* opacity: ${(props) => (props.active ? 1 : 0.5)}; */
  border: 3px solid ${(props) => (props.active ? "#fff" : "#aaa")};

  background-color: ${(props) => props.colour};
  border-radius: 50%;
  margin-left: 3px;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    /* transform: scale(1.1); */
    opacity: 0.9;
  }
`;
export const ContainerSpan = styled.div`
  margin: 10px 0;
  text-align: center;
  .active {
    background-color: #444;
    color: #fff;
  }
  /* display: flex;
  justify-content: center; */
`;
export const Span = styled.span`
  background-color: #777;
  width: 50px;
  display: inline-block;
  margin-left: 2px;
  margin-right: 2px;
  text-align: center;
  padding: 2px 0;
  border-radius: 3px;
  cursor: pointer;
  opacity: ${(props) => (props.opacity ? 1 : 0.7)};
  &:hover {
    background-color: #444;
    opacity: 1;
  }
`;
