import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Athelete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// animations
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import {
  sliderContainer,
  slider,
  lineAnim,
  PageAnimation,
  fade,
  imgAnim,
} from "../Animation";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element,controls] = useScroll();
  const [element2,controls2] = useScroll();
  return (
    <Work variants={PageAnimation} animate="show" initial="hide" exit="exit">
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      <Movies>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="the-athlete">
          <Hide>
            <motion.img variants={imgAnim} src={Athelete} alt="Athlete" />
          </Hide>
        </Link>
      </Movies>
      <Movies variants={fade} initial="hide" animate={controls} ref={element}>
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movies>
      <Movies variants={fade} initial="hide" animate={controls2} ref={element2}>
        <h2>The Goodtimes</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movies>
      <ScrollTop/>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 3rem 8rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0rem;
  }
  background: #fff;
`;

const Movies = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.6rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 10%;
  left: 0%;
  z-index: 1;
  background: #fffebf;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
