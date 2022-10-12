import React, { useState } from "react";
import styled from "styled-components";
import { StyledAbout } from "../styled";
import Data from "../Questions";
import { motion,AnimateSharedLayout } from "framer-motion";
//animation
import { scrollReveal } from "../Animation";
import { useScroll } from "../useScroll";

const FaqSection = () => {
  const [element,controls] = useScroll();
  const data = Data();
  const [activeQuestion, setActiveQuestion] = useState(false);
  const toggleQuestion = (index) => {
    if (activeQuestion === index) setActiveQuestion(null);
    else {
      setActiveQuestion(index);
    }
  };
  return (
    <StyledFaq ref={element} variants={scrollReveal} initiate="hide" animate={controls}>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      {data.map((q, index) => {
        return (
        <AnimateSharedLayout key={index}>
          <motion.div layout
            className="question"
            key={index}
            onClick={() => toggleQuestion(index)}
          >
            <motion.h3 layout>{q.question}</motion.h3>
            {activeQuestion === index ? (
              <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>{q.answer}</p>
              </div>
            ) : (
              ""
            )}
            <div className="faq-line"></div>
          </motion.div>
          </AnimateSharedLayout>
        );
      })}
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  h2 {
    padding-bottom: 3rem;
    font-weight: lighter;
  }
  h3 {
    font-weight: bold;
    padding: 2rem 0rem;
    font-size: 2rem;
  }
  span {
    display: block;
  }
  p {
    padding: 1rem 0rem;
  }

  .faq-line {
    width: 100%;
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
  }
  .question {
    cursor: pointer;
  }
`;

export default FaqSection;
