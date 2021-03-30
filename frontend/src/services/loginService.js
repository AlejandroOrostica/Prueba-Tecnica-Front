/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
import axios from 'axios'

const API_URL = 'http://localhost:8081/'

export default {

    login(data){
        return axios.post(API_URL + 'users/login', data)
    },


    getReceptors() {
        return axios.get(API_URL + '/receptor/')
    },

    async getReceptorsStats(data) {
        return axios.post(API_URL + '/year/receptor/', data)
    },

    async getYearStats(data) {
        return axios.post(API_URL + '/year/', data)
    },
    async getTransmittersByReceptor(data) {
        return axios.post(API_URL + '/receptor/', data)
    },
    async getItemsByReceptor(data) {
        return axios.post(API_URL + '/items/', data)
    }
}