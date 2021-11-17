import axios from 'axios'

const baseUrl = 'http://localhost:8082/';

export default class AddressBookService {

    addContact(data) {
        console.log("URL", this.baseUrl);
        return axios.post(`${baseUrl}/addressbookservice/create`, data);
    }

    getAllContacts() {
        return axios.get(`${baseUrl}addressbookservice/get`);
    }
    getContact(id) {
        return axios.get(`${baseUrl}addressbookservice/get/${id}`);
    }
    updateContact(data, id) {
        return axios.put(`${baseUrl}addressbookservice/update/${id}`, data);
    }

    deleteContact(id) {
        return axios.delete(`${baseUrl}addressbookservice/delete/${id}`);
    }

}