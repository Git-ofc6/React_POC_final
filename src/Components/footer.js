import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="row">
			<div className="col-md-4 align-items-center text-justify">
				<div className="beep">
					<img src="assets/Beep Logo.png" alt="Unable to load the page" height="40vh"></img>
					<p>Lorem ipsum dolor sit amet Eum, nam animi nesciunt est similique ut cum vero deleniti iusto, quos
						quam reprehenderit facere, hic quo exercitationem distinctio laboriosam laborum quae!</p>
				</div>

			</div>
			<div className="col-md-4">
				<div className="follow align-items-center text-justify">
					<h4>Follow Us</h4>
					<p>Lorem ipsum dolor sit amet consectetur, Laboriosam sdfauoib qawdacwvhrj fafjlnfomn nesciunt
						pariatur
						reiciendis perferendis?</p>
					<div className="footer-icons">
						<span style={{color:"rgb(46, 46, 150)"}} className="fab fa-facebook-f"></span>
						<span style={{color: "rgb(11, 137, 255)"}} className="fab fa-twitter"></span>
						<span style={{color: "rgba(255, 81, 81, 0.795)"}} className="fab fa-google-plus-g"></span>
						<span style={{color: "rgb(175, 0, 0)"}} className="fab fa-youtube"></span>

					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="contact align-items-center text-justify">
					<h4>Contact Us</h4>
					<p>My Company, 4578 Marmora Road, Glasgow</p>
					<p>D04 89GR</p>
					<p>Call us now: 0123-456-789</p>
					<p>Email: support@whatever.com</p>
				</div>
			</div>
		</div>
		<hr></hr>
		{/* <!-- Credits --> */}
		<div className="row container">
			<div className="col-md-12 d-flex justify-content-between">
				<p>&#169; 2021 Ecommerce site by www.beep.com</p>

				<img src="assets/Cards.png" alt="" width="180px" height="30vh"></img>
			</div>
		</div>
        </div>
    )
}

export default Footer;
