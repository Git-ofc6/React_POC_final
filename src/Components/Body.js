/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState } from 'react';
import ProductCard from './Bodycomponents/ProductCard';
import Carousel from './Bodycomponents/Carousel';
import Sidenav from './Bodycomponents/sidenav';
import Sortribbon from './Bodycomponents/sortribbon';
import Pagenation from './Bodycomponents/pagenation';
import './Body.css'

const Body = () => {
    const [show, setShow] = useState(15);
    const [sort, setSort] = useState("asc");
    const [category, setCategory] = useState("headphones");
    const [brand, setBrand] = useState("others");

    return (
        <div>
            <div className="container">
                <div className="row">
                    <Sidenav category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} />
                    <div className="col-md-9">
                        <Carousel />
                        <Sortribbon show={show}
                            setShow={setShow}
                            sort={sort}
                            setSort={setSort} />
                        <div className="row">
                            <ProductCard show={show} sortType={sort} category={category} brand={brand} />
                        </div>
                        
                    </div>
                </div>
            </div>
            <Pagenation />
            <hr></hr>
        </div>
    )
}

export default Body;
