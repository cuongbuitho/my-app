import React from 'react'
import ShopProduct from '../components/ShopProduct'
import Banner from '../components/Banner'
import Products from '../components/Products'


import { products } from '../data/DataProducts'
import { productService } from '../axios/Products'

function Home() {
    const [productsState, setProducts] = React.useState(products)


    React.useEffect(() => {
       productService.getProduct().then(res => setProducts(res))
    }, [])

    return (
        <React.Fragment>
                <Banner />
            <section >
            <div className ="main-product">
                <Products props={productsState} />
                    <ShopProduct />
            </div>
            </section>
        </React.Fragment>
    )
}

export default Home
