import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ListSettings,
  IconSetting,
  CloseIcon,
  Color,
  Ul,
  Options,
  Block,
  Title,
  Span,
  ContainerSpan,
} from "./SettingStyle";
import {
  changeColor,
  fixBack,
  restartSlide,
} from "../../redux/actions/actionsBack";
import colorSelector from "../../redux/selecotors/colorSelector";

function Setting() {
  const { colour, stopSlide } = useSelector(colorSelector);

  useEffect(() => {
    let mainColor = localStorage.getItem("color_option");
    if (mainColor !== null) {
      dispatch(changeColor(mainColor));
    }
  }, []);

  const [showSetting, setShowSetting] = useState(false);

  const dispatch = useDispatch();
  function showListSetting() {
    setShowSetting(!showSetting);
  }
  const changeColour = (colour) => {
    dispatch(changeColor(colour));
    localStorage.setItem("color_option", colour);
    // setStorageColor(colour);
  };
  const stopBack = () => {
    dispatch(fixBack());
  };
  const restartBack = () => {
    dispatch(restartSlide());
  };
  return (
    <>
      <ListSettings open={showSetting}>
        <IconSetting open={showSetting} onClick={showListSetting} />
        <CloseIcon onClick={() => setShowSetting(false)} />
        <Options>
          <Block>
            <Title className="title">Color</Title>
            <Ul>
              <Color
                colour="#ff9800"
                onClick={() => changeColour("#ff9800")}
                active={"#ff9800" == colour}
              ></Color>
              <Color
                colour="#ff6462"
                onClick={() => changeColour("#ff6462")}
                active={"#ff6462" == colour}
              ></Color>
              <Color
                colour="#5f9800"
                onClick={() => changeColour("#5f9800")}
                active={"#5f9800" == colour}
              ></Color>
              <Color
                colour="#ff2800"
                onClick={() => changeColour("#ff2800")}
                active={"#ff2800" == colour}
              ></Color>
              <Color
                colour="#ff06f0"
                onClick={() => changeColour("#ff06f0")}
                active={"#ff06f0" == colour}
              ></Color>
            </Ul>
          </Block>
          <Block>
            <h4>Random Background</h4>
            <ContainerSpan>
              <Span onClick={restartBack} opacity={stopSlide === false}>
                Yes
              </Span>
              <Span onClick={stopBack} opacity={stopSlide === true}>
                No
              </Span>
            </ContainerSpan>
          </Block>
        </Options>
      </ListSettings>
    </>
  );
}

export default Setting;
