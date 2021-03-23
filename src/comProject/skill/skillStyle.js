import styled from "styled-components";

export const Skills = styled.div`
  background-color: #eee;
`;
export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 50px 0;
`;

export const TitleSection = styled.h1`
  color: ${(props) => props.colour};
  margin-bottom: 50px;
  text-align: center;
`;
export const SkillItem = styled.div`
  background-color: #fff;
  display: flex;
  padding: 15px;
  margin-bottom: 15px;
`;
export const SkillName = styled.p`
  width: 140px;
  text-align: center;
  line-height: 25px;
`;

export const Progress = styled.p`
  width: 100%;
  border-radius: 4px;
  position: relative;
  background-color: #f6f6f6;
  overflow: hidden;
  height: 25px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${(props) => (props.prog > "50" ? props.colour : "red")};
    width: ${(props) => props.prog}%;
    transition: all 0.7s ease-in-out;
  }
`;
