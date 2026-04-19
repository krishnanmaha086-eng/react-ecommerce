import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { dataContext } from "./Context/CartContext";

import Home from './Home/Home';
import Login from "./Home/Login/Login";
import Sigin from "./Home/Login/Sigin";
import ProductNav from "./Product/ProductNav";
import AddToCart from "./Home/AddtoCart";

export default function App() {

    // 🔥 GLOBAL CART (shared storage)
    const [cartValue, setCartValue] = useState([]);

    // 🔥 Add to cart (handles quantity)
    function addCart(product) {
        setCartValue(prev => {
            const exist = prev.find(item => item.id === product.id);
            if (exist) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    }

    function removeItem(id) {
        setCartValue(prev => prev.filter(item => item.id !== id));
    }

    // 🔢 qty controls
    function increaseQty(id) {
        setCartValue(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }

    function decreaseQty(id) {
        setCartValue(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    }

    const router = createBrowserRouter([
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/sigin', element: <Sigin /> },
        { path: '/product/:id', element: <ProductNav /> },
        { path: '/cart', element: <AddToCart /> }
    ]);

    return (
        <dataContext.Provider
            value={{ cartValue, addCart, removeItem, increaseQty, decreaseQty }}
        >
            <RouterProvider router={router} />
        </dataContext.Provider>
    );
}