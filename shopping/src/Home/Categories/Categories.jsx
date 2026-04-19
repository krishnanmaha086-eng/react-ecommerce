import styles from '../CSS/Categories.module.css'
export default function Categories() {
    return (
        <>
            <div className="container mt-5">
                <h3 className="text-center mb-4">Shop by Category</h3>
                <div className="row g-3">

                    <div className="col-md-2">
                        
                        <div className={`${styles.category}`}><i className="bi bi-phone fs-2"></i>
                            <p>Mobiles</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className={`${styles.category}`}><i className="bi bi-laptop fs-2"></i>
                            <p>Laptops</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className={`${styles.category}`}><i className="bi bi-headphones fs-2"></i>
                            <p>Audio</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className={`${styles.category}`}><i className="bi bi-tv fs-2"></i>
                            <p>TV</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className={`${styles.category}`}><i className="bi bi-watch fs-2"></i>
                            <p>Wearables</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className={`${styles.category}`}><i className="bi bi-camera fs-2"></i>
                            <p>Camera</p>
                        </div>
                    </div>


                </div>
            </div>
        </>

    )
}