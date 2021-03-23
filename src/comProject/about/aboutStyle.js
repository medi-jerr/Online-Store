import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 50px 0;
`;
export const FlexOne = styled.div`
  flex: 1;
`;
export const TitleSection = styled.h1`
  color: ${(props) => props.colour};
  margin-bottom: 20px;
`;
export const Paragraph = styled.p`
  line-height: 1.8;
  color: #767676;
`;
export const FlexTwo = styled.div`
  flex: 1;
  text-align: center;
`;

export const Img = styled.img`
  width: 250px;
`;
