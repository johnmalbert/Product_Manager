import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Detail = props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <div className="container">
                <h1 className="display-4 m-5 p-5">Product Page:</h1>
                <h3>Title: {product.title}</h3>
                <h3>Price: ${product.price}</h3>
                <h3 className="mb-5">Description: {product.description}</h3>

                <Link to = "/products">Return to Main</Link>
            </div>
        </div>
    )
}

export default Detail
