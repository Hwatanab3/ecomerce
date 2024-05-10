import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import ProductInfo from '../components/productId/ProductInfo';
import './styles/productId.css'
import ProductSlider from '../components/productId/ProductSlider';
import ProductSimilar from '../components/productId/ProductSimilar';

const ProductId = () => {

    const [product, getProduct] = useFetch();

    const params = useParams();


    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${params.id}`;
        getProduct(url);
    }, [params.id])


    return (
        <section className='productId'>
            <ProductSlider
                product={product}
            />
            <ProductInfo
                product={product}
            />
            <ProductSimilar
                product={product}
            />
        </section>
    )
}

export default ProductId