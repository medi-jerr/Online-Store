import { Container, Background, Description } from "./LandingStyle";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { data } from "../data/DataLanding";
import { useDispatch, useSelector } from "react-redux";
import colorSelector from "../../redux/selecotors/colorSelector";
import imageSelector from "../../redux/selecotors/imageSelector";
import { theHeight1 } from "../../redux/actions/skillAction";

import {
  getImage,
  backgroundSlide,
  choosingBack,
  theSlide,
} from "../../redux/actions/actionsBack";

function Landing() {
  const dispatch = useDispatch();

  const { colour } = useSelector(colorSelector);
  const { image } = useSelector(imageSelector);

  useEffect(() => {
    dispatch(getImage(data));
    let background = localStorage.getItem("background");
    let stopSlide = localStorage.getItem("stopSlide");
    console.log(stopSlide);

    dispatch(choosingBack(background));
    dispatch(theSlide(stopSlide));

    dispatch(backgroundSlide());
  }, []);

  const conRef = useRef();
  useEffect(() => {
    dispatch(theHeight1(conRef.current.offsetHeight));
  });

  return (
    <Router>
      <Container backImage={image} ref={conRef}>
        <Background></Background>

        <Description colour={colour}>
          <h1>
            We are <span>Creative</span> agency
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            reiciendis incidunt quidem dolorum excepturi omnis molestiae totam
            vero praesentium magni.
          </p>
        </Description>
      </Container>
    </Router>
  );
}

export default Landing;
