import config from '../config/config';
import AxiosService from './AxiosService';

export default class AddressBookService {
    baseUrl = config.baseUrl;

    addContact(data) {
        console.log("URL", this.baseUrl);
        return AxiosService.postService(`${this.baseUrl}AddressBook`, data);
    }

    getAllContacts() {
        return AxiosService.getService(`${this.baseUrl}AddressBook`);
    }
    getContact(id) {
        return AxiosService.getService(`${this.baseUrl}AddressBook/${id}`);
    }
    updateContact(data, id) {
        return AxiosService.putService(`${this.baseUrl}AddressBook/${id}`, data);
    }

    deleteContact(id) {
        return AxiosService.deleteService(`${this.baseUrl}AddressBook/${id}`);
    }

}