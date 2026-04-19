import { useContext } from "react";
import { dataContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

export default function AddToCart() {
    const { cartValue, removeItem, increaseQty, decreaseQty } = useContext(dataContext);

    const total = cartValue.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="container mt-5">

            <h2 className="mb-4 text-center fw-bold">🛒 Shopping Cart</h2>

            <div className="row">

                {/* LEFT SIDE - CART ITEMS */}
                <div className="col-md-8">

                    {cartValue.length === 0 ? (
                        <div className="alert alert-warning text-center">
                            Your cart is empty
                        </div>
                    ) : (
                        cartValue.map(item => (
                            <div key={item.id} className="card mb-3 shadow-sm border-0">

                                <div className="row g-0 align-items-center p-3">

                                    {/* IMAGE */}
                                    <div className="col-md-3 text-center">
                                        <img
                                            src={item.image}
                                            className="img-fluid rounded"
                                            style={{ maxHeight: "120px", objectFit: "cover" }}
                                        />
                                    </div>

                                    {/* DETAILS */}
                                    <div className="col-md-4">
                                        <h5 className="fw-semibold">{item.name}</h5>
                                        <p className="text-muted mb-1">Price: ₹{item.price}</p>
                                        <p className="text-success fw-bold">
                                            ₹{item.price * item.quantity}
                                        </p>
                                    </div>

                                    {/* QUANTITY */}
                                    <div className="col-md-3 text-center">
                                        <div className="btn-group">

                                            <div className="d-flex align-items-center border rounded px-2 py-1" style={{ width: "130px" }}>

                                                <button className="btn btn-outline-secondary" onClick={() => decreaseQty(item.id)} > - </button> 
                                                
                                                <button className="btn btn-light"> {item.quantity} </button> 
                                                
                                                <button className="btn btn-outline-secondary" onClick={() => increaseQty(item.id)} > + </button>

                                            </div>

                                        </div>
                                    </div>

                                    {/* REMOVE */}
                                    <div className="col-md-2 text-end">
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Remove
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))
                    )}

                </div>

                {/* RIGHT SIDE - SUMMARY */}
                <div className="col-md-4">

                    <div className="card shadow p-4">

                        <h4 className="mb-3">Order Summary</h4>

                        <hr />

                        <p>
                            Items:
                            <span className="float-end">
                                {cartValue.reduce((sum, item) => sum + item.quantity, 0)}
                            </span>
                        </p>

                        <p>
                            Total:
                            <span className="float-end fw-bold text-success">
                                ₹{total}
                            </span>
                        </p>

                        <hr />

                        <button className="btn btn-success w-100 mb-2">
                            Proceed to Checkout
                        </button>

                        <Link to='/'>
                            <button className="btn btn-outline-secondary w-100">
                                Continue Shopping
                            </button>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}