import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Products from "../Products/products";
import { dataContext } from "../../Context/CartContext";


export default function Navbar() {

     const { cartValue} = useContext(dataContext);

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const searchValue = data.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
    );

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">MyShop</Link>

                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav me-auto">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/shop">Shop</Link></li>
                        <li><Link className="nav-link" to="/deals">Deals</Link></li>
                    </ul>

                    <div className="position-relative">

                        <form className="d-flex me-3">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="form-control me-2"
                                placeholder="Search..."
                            />
                        </form>

                        {/* 🔍 SEARCH DROPDOWN */}
                        {search && (
                            <div
                                className="position-absolute bg-white shadow rounded"
                                style={{
                                    width: "100%",
                                    top: "45px",
                                    zIndex: 1000
                                }}
                            >
                                {searchValue.length > 0 ?
                                    searchValue.map((item) => (
                                        <div key={item.id}
                                            className="p-2 border-bottom"
                                            style={{ cursor: "pointer" }}
                                            onMouseEnter={(e) => e.target.style.background = "#f1f1f1"}
                                            onMouseLeave={(e) => e.target.style.background = "white"}
                                            onClick={() => {
                                                navigate(`/product/${item.id}`)
                                                setSearch("")
                                            }}
                                        >{item.name}
                                        </div>
                                    )) : (
                                        <div className="p-2">No results</div>
                                    )}
                            </div>
                        )}

                    </div>
                    <Link to='/cart'>
                        <button className="btn btn-warning me-2">
                            <i className="bi bi-cart"></i> <span id="cartCount"><span className="float-end">
                                {cartValue.reduce((sum, item) => sum + item.quantity, 0)}
                            </span></span>
                        </button>
                    </Link>

                    <Link to="/login" className="btn btn-primary">
                        Login
                    </Link>

                </div>
            </div>
        </nav>

    );
}
