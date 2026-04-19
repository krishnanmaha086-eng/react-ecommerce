import Footers from '../CSS/Footer.module.css'
export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-white pt-5 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>MyShop</h5>
                            <p>Your trusted online store.</p>
                        </div>

                        <div className="col-md-3">
                            <h5>Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h5>Support</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h5>Contact</h5>
                            <p>Email: support@myshop.com</p>
                            <p>Phone: +91 9876543210</p>
                        </div>

                    </div>

                    <hr/>
                        <p className="text-center">© 2026 MyShop</p>
                </div>
            </footer>
        </>
    )
}