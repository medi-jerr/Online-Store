import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TimeLineCon,
  Container,
  TimeLi,
  Event,
  Year,
  Title,
  Description,
  Term,
  Href,
} from "./timeStyle";

function TimeLine({ colour }) {
  const [experience, setExperience] = useState([]);
  console.log(experience);

  useEffect(() => {
    axios.get("/data.json").then((res) => setExperience(res.data.experience));
  }, []);
  return (
    <TimeLineCon>
      <Container>
        <TimeLi colour={colour}>
          {experience.length &&
            experience.map((ite) => (
              <>
                <Year colour={colour}>{ite.year}</Year>

                <Event>
                  <Term colour={colour}></Term>
                  <Title colour={colour}>{ite.title}</Title>
                  <Description>{ite.description}</Description>
                  <Href href="">Learn more</Href>
                </Event>
                <div></div>
              </>
            ))}
        </TimeLi>
      </Container>
    </TimeLineCon>
  );
}

export default TimeLine;
