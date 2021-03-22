import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const ProductList = props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            <h3 className="display-4 m-3">Products List</h3>
            <div>
                {props.products.map((product, i) => {
                        return <p key={i}><Link to = {`/products/${product._id}`}> {product.title} - ${product.price}</Link> | 
                        <button className="btn btn-danger ml-1" onClick={(e) => {deleteProduct(product._id)}}> Delete </button></p>
                })}
            </div>
        </div>
    )
}

export default ProductList
