import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductComponents from './ProductComponents';
import axios from 'axios';

const ProductListing = () => {
    const products = useSelector((state) => state);

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err)
            });
        console.log(response)
    }
    console.log(products);

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <ProductComponents />
            </div>

        </div>
    )
}

export default ProductListing;
