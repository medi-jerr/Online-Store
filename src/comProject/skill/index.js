import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Skills,
  Container,
  Progress,
  SkillItem,
  TitleSection,
  SkillName,
} from "./skillStyle";
import selectorSkill from "../../redux/selecotors/selectorSkill";
import { useSelector } from "react-redux";

function Skill({ colour }) {
  const [appear, setAppear] = useState(false);
  const { skill } = useSelector(selectorSkill);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("/data.json").then((res) => setSkills(res.data.skills));
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > skill - 200) {
        setAppear(true);
      } else {
        setAppear(false);
      }
    };
  });

  return (
    <Skills>
      <Container>
        <TitleSection colour={colour}>Skills</TitleSection>
        {skills.map((item, index) => (
          <SkillItem key={index}>
            <SkillName>{item.skill}</SkillName>
            <Progress
              prog={appear ? item.progress : "0"}
              colour={colour}
            ></Progress>
          </SkillItem>
        ))}
      </Container>
    </Skills>
  );
}

export default Skill;
