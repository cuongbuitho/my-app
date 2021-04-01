import React from 'react'
import { Link } from 'react-router-dom'
function Product(props) {
    return (

        <section>
            <div class="product1">
                <div class="product-image1" ><img src={props.product.Image} alt="" /></div>
                <Link to={`/detail-product/${props.product.Pid}`}>
                    <div class="product-name1">
                        <p>{props.product.Name}</p>
                    </div>
                </Link>
                <div class="product-price1">
                    <p>{props.product.Price} Đ</p>
                </div>
                <div class="product-btn1">
                    <a href="#">
                        <div class="btn-Mua1">
                            <p>Mua Ngay</p>
                        </div>
                    </a>
                    <a href="#">
                        <div class="btn-Xem-Them1">
                            <p>Tìm Hiểu Thêm</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Product;

