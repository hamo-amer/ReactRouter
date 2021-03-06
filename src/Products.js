import React from 'react';
import Product from './Product';
import {Link,Route} from 'react-router-dom';

function Products({match}) {
    const productData=[
        {id:1,
            name: 'NIKE Liteforce Blue Sneakers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
            status: 'Available'
           },
        {id:2,
            name:'U.S. POLO ASSN. Slippers',
            description:'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
            status:'Available'
        },
        {id:3,
            name:'ADIDAS Adispree Running Shoes',
            description:'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
            status:'Available'
        },
        {id:4,
            name:'Lee Cooper Mid Sneakers',
            description:'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
            status:'Out of Stock'
        }
    ];
    const linkList=productData.map(product=>(
     <li>
        <Link to={`${match.url}/${product.id}`}>{product.name}</Link> 
     </li>
    ))
    return (
        <div>
            <div>
              <h3>Products</h3>
              <ul>{linkList}</ul>
            </div>
            <Route path={`${match.path}/:productId`} render={props=>(<Product data={productData} {...props} />)} />
            <Route exact path={match.path} render={()=>(<div>Please select a product</div>)} />
        </div>
    )
}

export default Products
