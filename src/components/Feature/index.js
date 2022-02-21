import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer id ='Featured'>
            <h1>Dish of the Day</h1>
            <p>Chicken Kebab with special sauce made in house!</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature;
