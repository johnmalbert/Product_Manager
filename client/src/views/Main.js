import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductForm from '../Components/ProductForm'
import ProductList from '../Components/ProductList'

const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);

    //axios to get all products
    useEffect (() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])

    return (
        <div>
            <h1 className="display-4 m-4">Product Entry!</h1>
            <ProductForm />
            <hr/>
            {loaded && <ProductList products={products} />}
        </div>
    )
}

export default Main
