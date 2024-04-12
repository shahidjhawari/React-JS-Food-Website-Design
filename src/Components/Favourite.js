import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './All.css';

function Favourite() {
  return (
    <div>
        <Header />
      <h2 className="section-heading">FAVOURITE</h2>
      <section className="products">
        <div className="product">
          <h3>PIZZA</h3>
          <img src="img/img1.jpg" alt="Product 1" />
          <p style={{ textDecorationLine: "line-through", color: "red" }}>
            Rs. 1200
          </p>
          <p>Rs. 800</p>
        </div>
        <div className="product">
          <h3>DEW</h3>
          <img src="img/dri3.jpg" alt="Product 2" />
          <p style={{ textDecorationLine: "line-through", color: "red" }}>
            Rs. 120
          </p>
          <p>Rs. 70</p>
        </div>
        <div className="product">
          <h3>ICE CREAM</h3>
          <img src="img/sw4.jpg" alt="Product 3" />
          <p style={{ textDecorationLine: "line-through", color: "red" }}>
            Rs. 400
          </p>
          <p>Rs. 320</p>
        </div>
        {/* Add more product items here */}
      </section>
      <Footer />
    </div>
  );
}

export default Favourite;
