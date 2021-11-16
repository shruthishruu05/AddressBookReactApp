import config from '../config/config';
const axios = require('axios').default;

export default class AddressBookService {
    baseUrl = config.baseUrl;
    addContact(data) {
        console.log("URL", this.baseUrl);
        return axios.post(`${this.baseUrl}AddressBook`, data);
    }
} 