/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
import axios from 'axios'

const API_URL = 'http://localhost:8081/'

export default {

    login(data){
        return axios.post(API_URL + 'users/login', data)
    },

    getProducts(){
        return axios.get(API_URL + 'products/')
    },

    getProduct(id) {
        return axios.get(API_URL + `products/${id}`)
    },
    
    addProduct(userId, data){
        return axios.post(API_URL + `products/add/${userId}`, data )
    },

    editProduct(userId, data, productId) {

        return axios.put(API_URL + `products/${userId}/update/${productId}`, data)
    },

    deleteProduct(userId, productId) {
        return axios.delete(API_URL + `products/${userId}/delete/${productId}`)
    },

    getLogs() {
        return axios.get(API_URL + `logs`)
    }
}