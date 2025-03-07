import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './styles/productSlider.css'


const ProductSlider = ({ product }) => {

    return (
        <Splide
            options={{
                rewind: true,
                gap: '1rem',
            }}
            aria-label="My Favorite Images"
        >
            {
                product?.images.map(image => (
                    <SplideSlide key={image.id}><img src={image.url} alt="product image" /></SplideSlide>
                ))
            }
        </Splide>
    )
}

export default ProductSlider