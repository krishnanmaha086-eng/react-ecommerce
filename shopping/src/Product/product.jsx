// import styles from '../CSS/Product.module.css';

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { dataContext } from "../Context/CartContext";
export default function Product() {

    const [product, setProduct] = useState(null);
    const { addCart } = useContext(dataContext);

    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:3000/products/" + id)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Product not found");
                }
                return res.json();
            })
            .then(data => setProduct(data))
    }, [id]);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="container mt-5">
            <div className="row align-items-start">

                <div className="col-md-6">
                    <img src={product.image}
                        style={{ height: "500px", width: "500px", objectFit: "cover" }}
                        className="img-fluid rounded shadow" />
                </div>

                <div className="col-md-6">

                    <h2 className="fw-bold">{product.name}</h2>

                    <div className="text-warning mb-2">
                        <h3>★★★★☆ ({product.reviews} reviews)</h3>
                    </div>

                    <div className="mb-3">
                        <span className="fs-3 fw-bold text-success">₹{product.price}</span>
                    </div>

                    <p>{product.description}</p>

                    {/* <div className="mb-3">
                        <label className="fw-bold">Quantity:</label>
                        <input type="number" defaultValue="1" min="1" className="form-control w-25" />
                    </div> */}

                    <div className="card-body">
                        <h5>{product.name}</h5>
                        <p className="fw-bold text-success">₹{product.price}</p>
                        <button onClick={() => addCart(product)} className="btn btn-success col-md-4 m-1">
                            Add to Cart
                        </button>
                        {/* {console.log(product.id)}; */}
                        {/* <button
                            className="btn btn-danger m-4"
                            to={`/product/${product.id}`}
                        >
                            View
                        </button> */}
                    </div>
                </div>

            </div>
        </div>
    );
}