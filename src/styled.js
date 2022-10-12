import styled from "styled-components";
import { motion } from "framer-motion";

// styled components
export const StyledAbout = styled(motion.div)`
    min-height:90vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:5rem 10rem;
    color:white;
`
export const StyledDescription = styled.div`
    flex:1;
    z-index: 2;
    padding-right:5rem;
    h2{
      font-weight:lighter;
    }
`
export const Hide = styled.div`
    overflow:hidden;
`
export const StyledImage = styled.div`
    flex:1;
    z-index: 2;
    overflow:hidden;
    img {
      width:100%;
      height:77vh;
      object-fit:cover;
    }
`