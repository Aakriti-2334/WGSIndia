import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'
import product_2 from '../../assets/product-2.png'

const Products = () => {
  return (
    <div id="card-area">
      <div className="wrapper">
        <div className="products">
          <div className="product">
            <img src={product_2} alt="" />
            <div className="pro_overlay">
              <h3>Alloy</h3>
              <p>
                ALLOY Partitioning Systems is a comprehensive and integrated system for glazed frame including door frame & door panel.
              </p>
              {/* <a href="#">See More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
