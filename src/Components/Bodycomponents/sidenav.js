import React from 'react'

import '../../App.css'


const Sidenav = (props) => {
    const{setCategory, setBrand}=props;
    
    return (

        <div className="col-md-3 mr-3">
            <div className="row">
                <div className="col-md-12 font-weight-bold d-flex flex-wrap  category_box">
                    <h4>ALL CATEGORIES</h4>
                   
                    <p className="btn text-primary" onClick={()=>setCategory("smartphones")}>Smartphones</p>
                    <p className="btn" onClick={()=>setCategory("accessory")}>Accesories</p>
                    <p className="btn" onClick={()=>setCategory("cables")}>Cables & Docks</p>
                    <p className="btn" onClick={()=>setCategory("cases")}>Cases & Films</p>
                    <p className="btn" onClick={()=>setCategory("headphones")}>Headphones</p>
                </div>
            </div>
            <div className="row price-box">
						<div className="col-md-12 ">
							<h4>PRICE</h4>
							<div className="mt-4 price">
								<div className="d-flex justify-content-between">
									<label htmlFor="#low-p" className="font-weight-bold">Min</label>
									<label htmlFor="#high-p" className="font-weight-bold">Max</label>
								</div>
								<div className="d-flex justify-content-between">
									<input type="number" min="100" max="500000" id="low-p" placeholder="$100" className="input-box"></input>
									<span>-</span>
									<input type="number" min="100" max="500000" id="high-p" placeholder="$500000" className="input-box"></input>
								</div>
							</div>

						</div>
					</div>
            <div className="row">
                <div className="col-md-12 color">
                    <h4>COLOR</h4>
                    <div className="color-selector mt-4">
                        <input type="radio" name="color" id="green" />
                        <label htmlFor="green"><span className="green"></span></label>

                        <input type="radio" name="color" id="yellow" />
                        <label htmlFor="yellow"><span className="yellow"></span></label>

                        <input type="radio" name="color" id="orange" />
                        <label htmlFor="orange"><span className="orange"></span></label>

                        <input type="radio" name="color" id="blue" />
                        <label htmlFor="blue"><span className="blue"></span></label>

                        <input type="radio" name="color" id="pink" />
                        <label htmlFor="pink"><span className="pink"></span></label>
                    </div>
                </div>
            </div>
            <div className="row brand-box p-4">
                <div className="col-md-12  ">
                    <h4 >BRAND</h4>
                    <br></br>
                   
                    <span className="d-flex justify-content-between font-weight-bold">
                        <p className="btn text-primary" onClick={()=>setBrand("apple")}>Apple</p>
                        <p className="pt-2">8</p>
                    </span>
                    <span className="d-flex justify-content-between font-weight-bold">
                        <p className="btn" onClick={()=>setBrand("samsung")}>Samsung</p>
                        <p className="pt-2">9</p>
                    </span>
                    <span className="d-flex justify-content-between font-weight-bold">
                        <p className="btn" onClick={()=>setBrand("nokia")}>Nokia</p>
                        <p className="pt-2">3</p>
                    </span>
                    <span className="d-flex justify-content-between font-weight-bold">
                        <p className="btn" onClick={()=>setBrand("redmi")}>Redmi</p>
                        <p className="pt-2">10</p>
                    </span>
                    <span className="d-flex justify-content-between font-weight-bold">
                        <p className="btn" onClick={()=>setBrand("realme")}>Realme</p>
                        <p className="pt-2">6</p>
                    </span>
                    <span className="d-flex justify-content-between font-weight-bold">
                        <p className="btn" onClick={()=>setBrand("motorola")}>Motorola</p>
                        <p className="pt-2">2</p>
                    </span>
                    <span className="d-flex justify-content-between font-weight-bold">
                        <p className="btn" onClick={()=>setBrand("others")}>Other Brands</p>
                        <p className="pt-2">12</p>
                    </span>
                </div>
            </div>
            <button type="button" className="btn btn-light btn-lg btn-block more-btn">
                More
            </button>
        </div>

    )
}

export default Sidenav
