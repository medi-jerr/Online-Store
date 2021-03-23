import React, { useEffect, useState } from "react";
import {
  Container,
  TitleSection,
  ImagesBox,
  Image,
  Overlay,
  PopupBox,
  Times,
  Title,
} from "./galleryStyle";
import axios from "axios";

function Gallery({ colour }) {
  const [images, setImages] = useState([]);
  const [showedImage, setShowedImage] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get("/images.json").then((res) => setImages(res.data.slice(0, 10)));
  }, []);

  const popupImage = (image) => {
    setShowedImage(image);
    setShow(true);
  };
  const rvOver = () => {
    setShow(false);
  };
  return (
    <>
      <Container>
        <TitleSection colour={colour}>Gallery</TitleSection>
        <ImagesBox>
          {images.map((pic, index) => (
            <Image
              key={index}
              src={pic.img}
              alt={pic.alt}
              onClick={() => popupImage(pic)}
            />
          ))}
        </ImagesBox>
      </Container>
      {show ? (
        <>
          <Overlay></Overlay>
          <PopupBox>
            <Times colour={colour} onClick={rvOver}>
              X
            </Times>
            {showedImage.alt ? (
              <Title colour={colour}>{showedImage.alt}</Title>
            ) : (
              <></>
            )}

            <img src={showedImage.img} alt={showedImage.alt} />
          </PopupBox>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Gallery;
