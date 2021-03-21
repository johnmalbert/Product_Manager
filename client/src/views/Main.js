import React, { useEffect, useState } from 'react'
import ProductForm from '../Components/ProductForm'

const Main = () => {
    return (
        <div>
            <h1 className="display-4 m-4">Product Entry!</h1>
            <ProductForm />
        </div>
    )
}

export default Main
