import styled from "styled-components";

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
export const ImagesBox = styled.div`
  text-align: center;
`;
export const Image = styled.img`
  width: 200px;
  padding: 3px;
  border: 1px solid #ccc;
  background-color: #f6f6f6;
  margin: 5px;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  z-index: 4;
`;
export const PopupBox = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: #fff;
  z-index: 5;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
export const Times = styled.p`
  position: fixed;
  font-size: 18px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.colour};
  right: -16px;
  top: -14px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;
export const Title = styled.h3`
  color: ${(props) => props.colour};
  text-align: center;
  padding: 0 0 5px;
`;
