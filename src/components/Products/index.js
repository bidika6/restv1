import React, {useState} from "react";
import {
ProductsHeading,
    ProductDesc,
    ProductImg,
    ProductInfo,
    ProductPrice,
    ProductsContainer,
    ProductTitle,
    ProductWrapper,
    ProductCard,
    ProductButton
} from "./ProductsElements";

const Products = ({heading, data}) => {



return (
<ProductsContainer>

    <ProductsHeading id = "Menu" >{heading}</ProductsHeading>

    {data.map((foodItem, index) => {
        return (
            <ProductCard key = {index}>
                <ProductImg src = {foodItem.img} alt = {foodItem.alt} />
                <ProductInfo>
                    <ProductTitle>{foodItem.name}</ProductTitle>
                    <ProductDesc>{foodItem.desc}</ProductDesc>
                    <ProductPrice>{foodItem.price}</ProductPrice>
                    <ProductButton>{foodItem.button}</ProductButton>
                </ProductInfo>
            </ProductCard>
        )
    })}
    <ProductWrapper>

    </ProductWrapper>



</ProductsContainer>

)

};





export default Products;

