import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        console.log("Form submitted.");

        axios.post('http://localhost:8000/api/product/create', {
            title,
            price,
            description
        })
            .then(res => {
                setTitle("");
                setPrice("");
                setDescription("");
                console.log(res);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="container">

            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <h5 className="text-left">Title:</h5>
                    <input className="form-control" type="text" name="title" onChange={e => setTitle(e.target.value) } value={title}/>
                </div>
                <div className="form-group">
                    <h5 className="text-left">Price:</h5>
                    <input className="form-control" type="number" name="price" onChange={e => setPrice(e.target.value) } value={price} />
                </div>
                <div className="form-group">
                    <h5 className="text-left">Description:</h5>
                    <input className="form-control" type="text" name="description" onChange={e => setDescription(e.target.value) } value={description} />
                </div>
                <button className="btn btn-primary" type="submit">Enter Product</button>
            </form>
            </div>
        </div>
    )
}

export default ProductForm
