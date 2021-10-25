import React from 'react'
import '../../App.css'
import ProductData from '../../Data/Product.json'

const ProductCard = (props) => {
    const { show, sortType, category, brand } = props;

    var categorySort;
    var brandSort;
    var sorted;
    
    if (ProductData.Product_type === "all") {
        categorySort = ProductData;
    } else {
        categorySort = ProductData.filter((data) => {
            return data.Product_type === category;
        })
    }

    if (ProductData.Product_type === "all") {
        brandSort = ProductData;
    } else {
        brandSort = categorySort.filter((data) => {
            return data.Product_brand === brand;
        })
    }


    sorted = brandSort.sort((a, b) => {
        const isReversed = (sortType === 'asc') ? 1 : -1;
        return isReversed * a.Product_name.localeCompare(b.Product_name);
    })
  

    const productsDisplay = [];
    for (let i = 0; i < show; i++) {
        productsDisplay.push(sorted[i]);
    }

   const filteredproductsDisplay = productsDisplay.filter(function( element ) {
        return element !== undefined;
     });
    
    return (
        <div>
            {filteredproductsDisplay.map(function (Product, i) {

                return (

                    <div className="col-md-4 col-sm-3 d-inline-block m-3 Product_card" >
                        <div className="card align-items-center" key={"ID" + i}>
                            <img className="card-img-top"
                                src={Product.Product_img}
                                alt="Refresh the page"></img>

                            <div className="card-body text-center">
                                <h5 className="card-title">{Product.Product_name}</h5>
                                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                    className="fas fa-star"></i><i className="fas fa-star-half"></i></p>
                                <p><span className="d-mrp">${Product.Product_offer_price}</span><span className="o-mrp">${Product.Product_price}</span></p>
                            </div>
                        </div>
                    </div>
                );
            }
            )
            }

        </div>
    )
}


export default ProductCard;
