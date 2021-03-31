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
    
    addProduct(userId, data){
        return axios.post(API_URL + `products/add/${userId}`, data )
    }
}