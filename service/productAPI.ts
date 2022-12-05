
import {axiosClient} from '../service/axiosClient'
import { Product } from '../types/product'
const productAPI =  {
    getProduct: (productID: string | undefined) => {
        return axiosClient.get<unknown, Product>(`/products/${productID}`)
    },
    getProductList: () => {
        return axiosClient.get<unknown, Product[]>("/products/")
    },
   
}

export default productAPI