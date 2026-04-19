import styles from '../CSS/Hero.module.css'
export default function Hero() {
    return (
        <>
            <section className={`${styles.hero} d-flex align-items-center`}>
                <div className="container text-center text-md-start">
                    <div className="row align-items-center">

                        <div className="col-md-6 text-white">
                            <h1 className="display-4 fw-bold">Shop Smart, Live Better</h1>
                            <p className="lead">Discover top deals on electronics, gadgets & accessories</p>

                            <div className="mt-4">
                                <button className="btn btn-warning btn-lg me-3">Shop Now</button>
                                <button className="btn btn-outline-light btn-lg">View Deals</button>
                            </div>
                        </div>

                        <div className="col-md-6 text-center mt-4 mt-md-0">
                            <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg" className="img-fluid" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}