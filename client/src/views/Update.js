import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Update = props => {
    const {id} = props;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const submitHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + id, {
            title,
            price,
            description
        })
            .then(data => {
                data.json({message: "Success", results: data})
                navigate("http://localhost:8000/products/" + id)
            })
            .catch(err => console.log("Error updating", err))
    }
    return (
        <div>
            <div className="container p-5">

            <h1 className="display-4 mb-4">Update a Product</h1>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="title">Title: </label>
                            <input className="form-control" type="text" name="title" id="title" onChange={e => setTitle(e.target.value)} value={title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price: </label>
                            <input className="form-control" type="number" name="price" onChange={ e => setPrice(e.target.value)} value={price}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input className="form-control" type="text" name="description" onChange={e => setDescription(e.target.value)} value={description}/>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit Changes</button>
                    </form>
                    <button className="btn btn-success mt-4"> <Link style={{color: 'white'}} to = "/">Return to Main</Link></button>

            </div>
        </div>
    )
}

export default Update
