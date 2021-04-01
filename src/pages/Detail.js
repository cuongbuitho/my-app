import React from 'react'

import { useParams } from 'react-router-dom'

import { products } from '../data/DataProducts'

function Detail() {
    const Pid = useParams('Pid')
    const [productState, setProductState] = React.useState({})
    React.useEffect(() => {
        products.map(item => {
            
            if (item.Pid == Pid.Pid) {  setProductState(item)}
        })
    }, [])


    return (
        <div>
            <div class="main">
                <div class="detail-product">
                    <div class="image-product">
                        <img src={productState.Image}
                            alt="" />
                    </div>
                    <div class="info-product">
                        <div class="product-name">
                            <p>{productState.Name}</p>
                        </div>
                        <div class="product-price">
                            <p>{productState.Price}</p>
                        </div>
                        <div class="btn-Mua">
                            <p>Mua Ngay</p>
                        </div>
                        <p>Gọi giao hàng tận nơi <a href="#" class="hotline">1800 6936</a></p>

                    </div>

                </div>
                <div class="description">
                    <span>Từng ngụm ngon mê ly từ Dưa lưới thanh mát quyện cùng nền Trà Lài thơm ngon dịu nhẹ.</span>
                    <br />
                    <span>

                        Thanh vị trà mát vị dưa - Sự kết hợp hoàn hảo của nền trà lài nhẹ nhàng, cùng vị dưa lưới đặc trưng, Nhà còn cho sẵn topping dưa lươi vàng tươi để bạn thêm hứng khởi đón Tết thiệt tươi khoẻ, may mắn nhé. Thưởng thức ngay!</span>
                </div>
            </div>
        </div>
    )
}

export default Detail
