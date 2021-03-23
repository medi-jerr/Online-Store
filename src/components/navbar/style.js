import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 0 50px 0 50px;
  height: 60px;
  margin: 0 auto;
  background-color: #538f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
`;
export const Ul = styled.ul`
  display: flex;
  padding-right: 40px;
`;
export const Logo = styled.h2`
  color: #fff;
  span {
    color: #222;
  }
`;
export const Link = styled(NavLink)`
  color: wheat;
  padding: 0 20px;
  align-self: stretch;
  font-size: 18px;
  ${(props) =>
    props.sign &&
    css`
      border: 1px solid #eed;
      padding-top: 5px;
      padding-bottom: 7px;
      border-radius: 20px;
      &:active {
        background-color: #d3f;
      }
    `};
`;
export const Input = styled.input`
  padding: 7px 15px;
  border-radius: 4px 0 0 4px;
  border: none;
  width: 400px;
  outline: none;
`;
export const Button = styled.button`
  padding: 7px 15px;
  border-radius: 0 4px 4px 0;
  border: none;
  outline: none;
  background-color: #d3f;
`;
