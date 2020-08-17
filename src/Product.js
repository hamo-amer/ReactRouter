import React from 'react'

function Product({match,data}) {
    const product=data.find(p=>p.id==match.params.productId);
    var productData;
    if(product)
    productData=<div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <hr/>
        <h4>{product.status}</h4>
    </div>
    else 
    productData=<h2>Sorry.Product dosen't exist </h2>
    return (
        <div>
            {productData}
        </div>
    )
}

export default Product
