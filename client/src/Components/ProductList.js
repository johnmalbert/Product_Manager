import React from 'react';
import { Link } from '@reach/router';

const ProductList = props => {
    return (
        <div>
            <h3 className="display-4 m-3">Products List</h3>
            <div>
                {props.products.map((product, i) => {
                    return <p key={i}><Link to = {`/products/${product._id}`}> {product.title} - ${product.price}</Link></p>
                })}
            </div>
        </div>
    )
}

export default ProductList
