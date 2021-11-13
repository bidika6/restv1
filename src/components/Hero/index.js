import React from 'react';
import Navbar from "../Navbar";
import { HeroContainer, HeroItems, HeroParagraph, HeroButton, HeroH1, HeroContent } from './HeroElements';
import {useState} from "react";
import Sidebar from "../Sidebar";




const Hero = () => {

    const [ isOpen, setIsOpen ] = useState(false);
    const toggle  = () => {
        setIsOpen(!isOpen)
    }
    return (

<HeroContainer>
    <Navbar toggle = {toggle}/>
    <Sidebar isOpen = {isOpen} toggle = {toggle} />
    <HeroContent>
        <HeroItems>
            <HeroH1>
            Authentic Indian Cuisine
            </HeroH1>
            <HeroParagraph>Quality you can taste!</HeroParagraph>
            <HeroButton>Place Order</HeroButton>
        </HeroItems>
    </HeroContent>
</HeroContainer>
    )
};


export default Hero;

