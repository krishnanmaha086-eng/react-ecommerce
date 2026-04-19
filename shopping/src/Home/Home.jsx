
import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";
import Hero from "./Header/Hero";
import Navbar from "./Header/navbar";
import Products from "./Products/products";



export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <Products />
            <Footer />
        </>
    )
}