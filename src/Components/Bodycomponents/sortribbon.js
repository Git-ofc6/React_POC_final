/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

// import ProductCard from './ProductCard';

const Sortribbon = (props) => {
    const { show, setShow, sort, setSort } = props;

    function sortHandler(event) {
        setSort(event.target.value);
    }
    function showHandler(event) {
        setShow(event.target.value);
    }
    return (
        <div className="row py-3 mx-3 sort-box">
            <div className="col-md-3 col-sm-3 mt-2 ">
                <span className="count">{show} </span>
                <span> items</span>
            </div>
            <div className="col-md-3 col-sm-3 mt-2">
                <label htmlFor="SortBy">Sort By</label>
                <select value={sort} onChange={sortHandler} id="SortBy">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <div className="col-md-3 col-sm-3 mt-2">
                <label htmlFor="#CountSort">Show</label>
                <select value={show} onChange={showHandler} id="CountSort">
                    <option value="3">3</option>
                    <option value="8">8</option>
                    <option value="11">11</option>
                    <option value="15">15</option>
                </select>
            </div>
            <div className="col-md-3 col-sm-3 d-flex justify-content-around mt-1">
                <i className="fas fa-th active btn-lg " ></i>
                <i className="fas fa-bars btn-lg"  ></i>
            </div>
        </div>


    )
}

export default Sortribbon
