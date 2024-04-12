import React from 'react';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/br1.jpg';
import img7 from './img/br2.jpg';
import img8 from './img/br3.jpg';
import img9 from './img/br4.jpg';
import img10 from './img/br5.jpg';

function Main() {
  return (
    <>
    <h2 className="section-heading">FAST FOOD</h2>
    <section className="products">
        <div className="product">
            <h3>PIZZA</h3>
            <img src={img1} alt="Product 1" />
            <p style={{ textDecorationLine: "line-through", color: "red" }}>Rs. 1200</p>
            <p>Rs. 800</p>
        </div>
        <div className="product">
            <h3>SANDVICH</h3>
            <img src={img2} alt="Product 2" />
            <p style={{ textDecorationLine: "line-through", color: "red" }}>Rs. 400</p>
            <p>Rs. 200</p>
        </div>
        <div className="product">
            <h3>BURGER</h3>
            <img src={img3} alt="Product 3" />
            <p style={{ textDecorationLine: "line-through", color: "red" }}>Rs. 500</p>
            <p>Rs. 300</p>
        </div>
        <div className="product">
            <h3>HOTDOG</h3>
            <img src={img4} alt="Product 3" />
            <p style={{ textDecorationLine: "line-through", color: "red" }}>Rs. 400</p>
            <p>Rs. 350</p>
        </div>
        <div className="product">
            <h3>FRIESES</h3>
            <img src={img5} alt="Product 3" />
            <p style={{ textDecorationLine: "line-through", color: "red" }}>Rs. 400</p>
            <p>Rs. 299</p>
        </div>
    </section>

    <h2 className="section-heading">DESI FOOD</h2>
    <section className="products">
        <div className="product">
            <h3>CHICKEN BIRYANI</h3>
            <img src={img6} alt="Product 1" />
            <p style={{ textDecorationLine: "line-through", color: "red" }}>Rs. 200</p>
            <p>Rs. 150</p>
        </div>
        <div className="product">
            <h3>BHINDI GOSHT</h3>
            <img src={img7} alt="Product 2" />
            <p style={{ textDecorationLine: "line-through", color: "red" }}>Rs. 950</p>
            <p>Rs. 800</p>
        </div>
        <div className="product">
            <h3>KOFTA</h3>
            <img src={img8} alt="Product 3" />
            <p style={{ textDecorationLine: "line-through", color: "red" }}>Rs. 600</p>
            <p>Rs. 499</p>
        </div>
        <div className="product">
            <h3>KARHI</h3>
            <img src={img9} alt="Product 3" />
            <p style={{ textDecorationLine: "line-through", color: "red" }}>Rs. 300</p>
            <p>Rs. 200</p>
        </div>
        <div className="product">
            <h3>CHICKEN KARDAI</h3>
            <img src={img10} alt="Product 3" />
            <p style={{ textDecorationLine: "line-through", color: "red" }}>Rs. 1390</p>
            <p>Rs. 1200</p>
        </div>
    </section>
</>
  )
}

export default Main
