import React from "react";
import home from "../img/home2.png";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
// styles
import { StyledAbout, StyledDescription, StyledImage } from "../styled";
import styled from "styled-components";
// animations
import { scrollReveal } from "../Animation";
import { useScroll } from "../useScroll";

const ServicesSection = () => {
const [element,controls] = useScroll();
  return (
    <StyledServices
      ref={element}
      variants={scrollReveal}
      initial="hide"
      animate={controls}
    >
      <StyledImage>
        <img src={home} alt="" />
      </StyledImage>
      <Description>
        <h2>
          High <span>quality</span> service.
        </h2>
        <Cards>
          <Card>
            <div className="icons">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icons">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icons">
              <img src={diaphragm} alt="" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icons">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 4rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem;
  }
`;
const Description = styled(StyledDescription)`
  padding-right: 0rem;
  padding-left: 5rem;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Card = styled.div`
  flex-basis: 15rem;
  .icons {
    display: flex;
    align-items: center;
    space: 1;
    h3 {
      margin-left: 1rem;
      background: white;
      padding: 1rem;
      color: black;
    }
  }
`;

export default ServicesSection;
