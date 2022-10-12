import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
// animations
import { motion } from 'framer-motion';
import {PageAnimation} from "../Animation";
import ScrollTop from '../components/ScrollTop';


const AboutUs = () => {
    return (
        <motion.div variants={PageAnimation} animate="show" initial="hide" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
            <ScrollTop/>
        </motion.div>
    )
}

export default AboutUs;