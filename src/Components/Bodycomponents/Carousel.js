import React from 'react';



const Addslider = () => {
    
    return (
        <div id="carouselIndicators" className="carousel slide ms-3 " data-bs-ride="carousel">
            <div className="carousel-indicators">
                <li type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                <li type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
                <li type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="assets/carousel/2.jpeg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="assets/carousel/3.jpeg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="assets/carousel/5.jpg" className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next d-none" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default Addslider
