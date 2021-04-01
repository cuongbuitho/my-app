import React from 'react'
function Product(props) {
    console.log(props)
    return (
            <div className="product">
                <div className="product-image" style={{
                    backgroundImage: `url(${props.props.Image})`
                    , width: "342px", height: "400px", backgroundRepeat: "no-repeat"
                    ,backgroundPosition: "center"
                }}>
                </div>
                <a href="#"><div className="product-name"><p>{props.props.Name}</p></div></a>
                <div className="product-price"><p>{props.props.Price}</p></div>
                <div className="product-btn">
                    <a href="#"><div className="btn-Mua"><p>Mua Ngay</p></div></a>
                    <a href="#"><div className="btn-Xem-Them"><p>Tìm Hiểu Thêm</p></div></a>
                </div>
            </div>
    )
}

export default Product;

