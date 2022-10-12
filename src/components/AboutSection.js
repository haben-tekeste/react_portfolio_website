import React from "react";
import home from "../img/home1.png";
import styled from "styled-components";
// styles
import { StyledAbout, StyledDescription, StyledImage, Hide } from "../styled";
//animation
import { motion } from "framer-motion";
import { titleAnim, fade, imgAnim } from "../Animation";
//svg
import Wave from "../wave";


const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero commodi quia nam ad magnam?</motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={imgAnim} src={home} alt="" />
      </StyledImage>
      <Wave/>
    </StyledAbout>
  );
};


export default AboutSection;