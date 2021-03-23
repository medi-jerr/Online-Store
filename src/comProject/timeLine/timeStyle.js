import styled from "styled-components";

export const TimeLineCon = styled.div`
  background-color: #eee;
`;
export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 50px 0;
`;

export const TimeLi = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;

  ::before {
    content: "";
    position: absolute;
    left: 50%;
    background-color: ${(props) => props.colour};
    width: 3px;
    height: 100%;
    transform: translate(-50%);
  }
`;
export const Year = styled.h5`
  position: relative;
  margin: 20px auto;
  text-align: center;
  width: 50px;
  color: #fff;
  background-color: ${(props) => props.colour};
  border-radius: 4px;
  padding: 2px 3px;
`;
export const Event = styled.div`
  background-color: #fff;
  width: calc(50% - 40px);
  padding: 10px;
  position: relative;
  margin-top: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  /* z-index: 2; */
  &::after {
    content: "";
    position: absolute;
    top: 13px;
    right: -7px;
    width: 15px;
    height: 15px;
    background-color: #fff;
    transform: rotate(45deg);
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.5);
  }
  &:nth-child(even) {
    .selec {
      direction: rtl;
      margin-left: auto;
    }
  }
  &:nth-child(odd) {
    align-self: flex-end;
    .selec {
      top: 15px;
      right: -20px;
    }
    &::after {
      background-color: #fff;
      left: -8px;
      box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.5);
    }
  }
`;
export const Term = styled.p`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #5f9800;
  right: -50px;
  background-color: white;
`;
export const Title = styled.h5`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ colour }) => colour};
`;
export const Description = styled.p`
  line-height: 1.4;
  font-family: arial, Geneva, Verdana, sans-serif;
  letter-spacing: 0.6px;
  word-spacing: 1px;
  color: #444;
  margin-bottom: 10px;
  z-index: 5;
`;
export const Href = styled.a``;
