import React from 'react'
import { products } from '../data/DataProducts'

import ListProduct from '../components/ListProduct'
import { productService } from '../axios/Products'



function List() {
  const [productsState, setProducts] = React.useState([])
  React.useEffect(() => {
    productService.getPage(1).then(res => setProducts(res))
    console.log(productsState)
  }, [])

  const [list,setList] = React.useState([1, 2, 3, 4, 5])

  return (
    <div class="container">
      <div class="main">
        <div class="category">
          <ul class="list-category">
            <li class="list-category-item">NỔI BẬT</li>
            <li class="list-category-item">CÀ PHÊ GÓI</li>
            <li class="list-category-item">CÀ PHÊ VIỆT NAM</li>
            <li class="list-category-item">CÀ PHÊ MÁY</li>
            <li class="list-category-item">COLD BREW</li>
            <li class="list-category-item">TRÀ TRÁI CÂY</li>
            <li class="list-category-item">TRÀ SỮA MACCHIATO</li>
            <li class="list-category-item">CÀ PHÊ ĐÁ XAY</li>
            <li class="list-category-item"> THỨC UỐNG TRÁI CÂY</li>
            <li class="list-category-item">MATCHA - SÔCÔLA</li>
            <li class="list-category-item">BÁNH & SNACK</li>
          </ul>
        </div>
        <div class="main-product">
          {
            productsState.map(i => {
              return <ListProduct product={i} />
            })
          }
        </div>

      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          {
            
            list.map((item,index)=>{
              return <li class="page-item" onClick={(e) =>{
                productService.getPage(item).then(res => setProducts(res))
              }} ><a class="page-link" href="#">{item}</a></li>
            })
          }
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default List
