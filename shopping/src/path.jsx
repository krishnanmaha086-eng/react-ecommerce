import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/sigin',
            element: <Sigin />
        },
        {
            path: '/product/:id',   // ✅ FIXED
            element: <ProductNav />
        },
        {
            path: '/cart',
            element: <AddToCart />
        }
    ]);

    return (
        <>
            <RouterProvider router={router}>
            </RouterProvider>
        </>
    )
}