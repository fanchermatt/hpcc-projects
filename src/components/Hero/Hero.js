import React from "react";
import { Wrapper } from "./Hero.styles";
import heroImage from "../../images/hero.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <img
        alt="Complete Data Lake Management, From Ingestion and Enrichment to Content Delivery"
        src={heroImage}
      />
    </Wrapper>
  );
};

export default Hero;
