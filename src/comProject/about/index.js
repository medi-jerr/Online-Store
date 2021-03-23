import React, { useRef, useEffect } from "react";
import {
  Container,
  Img,
  FlexOne,
  FlexTwo,
  TitleSection,
  Paragraph,
} from "./aboutStyle";
import { theHeight2 } from "../../redux/actions/skillAction";
import { useDispatch } from "react-redux";

function About({ colour }) {
  const conRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(theHeight2(conRef.current.offsetHeight));
  });
  return (
    <Container ref={conRef}>
      <FlexOne>
        <TitleSection colour={colour}>About</TitleSection>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta vel
          maxime adipisci non labore expedita reprehenderit laudantium possimus
          explicabo! Nobis recusandae quos amet voluptates praesentium fugiat
          numquam deserunt, magni eos architecto vel laboriosam modi, aut
          officiis cum dolorem magnam enim?
        </Paragraph>
      </FlexOne>
      <FlexTwo>
        <Img src="/img/two.svg" alt="lllll" />
      </FlexTwo>
    </Container>
  );
}

export default About;
