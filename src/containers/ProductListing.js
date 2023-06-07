import React from 'react'
import { useSelector } from 'react-redux'

const ProductListing = () => {
    const products = useSelector((state) => state);
    console.log(products);
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>ProductListing</h2>
            </div>

        </div>
    )
}

export default ProductListing;
