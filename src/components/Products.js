import React from 'react'

import Product from '../components/Product'
function Products(props) {

    for (let index = 0; index < props.props.length; index++) {
        const element = props.props[index];
    }
    
    console.log(props)
    return (
        <>
            {
                props.props.map((item,index) => {
                    if( index > 5 ) {return null}
                    return <Product props={item}></Product>
                })
            }
        </>
    )
}
export default Products
