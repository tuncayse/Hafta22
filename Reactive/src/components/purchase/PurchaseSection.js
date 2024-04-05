import React from 'react';
import ProductCard from './ProductCard';
import './purchase.css';

function PurchaseSection() {
  return (
    <section id="purchase" className="container py-2">
      <div className="class-top" style={{ alignContent: 'center' }}>
        <div className="titles">
          <h4 style={{ textAlign: 'center', color: 'rgb(21,76,121)' }}><b>PURCHASE FROM US</b></h4>
        </div>
        <h6 style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</h6>
      </div>
      <div className="row d-flex mx-auto" id="products" style={{ display: 'flex' }}>
        <ProductCard imageUrl="images/purchase1.jpg" title="Kettlebell / 5 kg" originalPrice="89.99" salePrice="59.99" />
        <ProductCard imageUrl="images/purchase2.jpg" title="Treadmill" originalPrice="299.99" salePrice="249.99" />
        <ProductCard imageUrl="images/purchase3.jpg" title="Adjustable Dumbbell" originalPrice="120.99" salePrice="95.99" />
        <ProductCard imageUrl="images/purchase4.jpg" title="Kettlebell / 3 kg" originalPrice="79.99" salePrice="49.99" />
        
      </div>
    </section>
  );
}

export default PurchaseSection;
