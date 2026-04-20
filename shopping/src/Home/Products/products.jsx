import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { dataContext } from "../../Context/CartContext";

export default function Products() {
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    
    const { addCart } = useContext(dataContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                if (!response.ok) {
                    throw Error("Failed to Fetch")
                }
                return response.json()
            })
            .then(data => setProducts(data))
            .catch((error) => {
                setError(error.message)
            })
    }, [])


    if (error) {
        return <h2 className="text-danger text-center mt-5">{error}</h2>;
    }

    return (
        <>
            {products && <div className="container mt-5">
                <h3 className="text-center mb-4">Featured Products</h3>
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card shadow-sm text-center p-2">

                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.title}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />

                                <div className="card-body">
                                    <h5>{product.title}</h5>
                                    <p className="fw-bold text-success">₹{product.price}</p>
                                    <button onClick={() => addCart(product)} className="btn btn-success col-md-4 m-1">
                                        Add to Cart
                                    </button>
                                    {/* {console.log(product.id)}; */}
                                    <Link
                                        className="btn btn-danger col-md-4 m-2"
                                        to={`/product/${product.id}`}
                                    >
                                        View
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
        </>
    );
}

