import React from 'react';
import Navbar from "../Navbar";
import { HeroContainer, HeroItems, HeroParagraph, HeroButton, HeroH1, HeroContent } from './HeroElements';
import {useState} from "react";
import Sidebar from "../Sidebar";
//Import store stuff
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/cart/cartSlice'




const Hero = () => {
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch()

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
            <HeroParagraph>{cart}</HeroParagraph>
            <HeroButton
            onClick={()=>{dispatch(increment())}}
            >Place Order</HeroButton>
        </HeroItems>
    </HeroContent>
</HeroContainer>
    )
};


export default Hero;

