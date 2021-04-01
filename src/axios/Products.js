import axios from 'axios' 
export const url_product = 'http://localhost:4000/product';
export class ProductService {
    getProduct() {
        return axios.get('http://localhost:4000/product').then(resp => {
            console.log(resp.data)
            return Promise.resolve(resp.data)
        }).catch(res => console.log('res'))
    }
    getPage(Pid) {
        console.log(Pid)
        return axios.get(`http://localhost:4000/product/page=${Pid}`).then(resp => {
            console.log(resp.data)
            return Promise.resolve(resp.data)
        }).catch(res => console.log('res'))
    }
}
export const productService = new ProductService()