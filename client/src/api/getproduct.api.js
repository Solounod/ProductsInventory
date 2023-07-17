
import axios from 'axios'


const apiProduct = axios.create({
        baseURL: "http://localhost:8000/api/v1/product/"
});

export const getProduct = () => apiProduct.get("/");
export const getSingleProduct = (id) => apiProduct.get(`/${id}/`);
export const postProduct = (product) => apiProduct.post("/", product);
export const deleteProduct = (id) => apiProduct.delete(`/${id}`);
export const updateProduct = (id, product) => apiProduct.put(`/${id}/`, product);
