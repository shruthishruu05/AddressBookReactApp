import React, { useState } from "react";
import './form.scss';
import logo from '../../assets/logo.png';
import CancelButton from '../../assets/cancel.png'
import { Link } from 'react-router-dom';
import AddressBookService from "../../service/AddressBook-service";

const Form = (props) => {
    let initialValue = {
        name: '',
        allCity: [
            'Bangalore', 'Chennai', 'Hyderabad'
        ],
        allstates: [
            'Karnataka', 'Telengana', 'Tamilnadu'
        ],
        city: '',
        state: '',
        address: '',
        zip: '',
        phoneNumber: '',
        id: '',
        isUpdate: false,
        error: {
            name: '',
            city: '',
            state: '',
            address: '',
            zip: '',
            phoneNumber: ''
        }
    }

    const [formValue, setForm] = useState(initialValue);
    const [displayMeassage, setDisplayMessage] = useState("");

    const addressbookService = new AddressBookService();

    const changeValue = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value })
    }

    const validData = async () => {
        let isError = false;
        let error = {
            name: '',
            city: '',
            state: '',
            address: '',
            zip: '',
            phoneNumber: ''
        }
        if (formValue.name.length < 1) {
            error.name = 'Name is required field'
            isError = true;
        }
        if (formValue.state.length < 1) {
            error.state = 'State is required field'
            isError = true;
        }
        if (formValue.city.length < 1) {
            error.city = 'City is required field'
            isError = true;
        }
        if (formValue.address.length < 1) {
            error.address = 'Address is required field'
            isError = true;
        }
        if (formValue.zip.length < 1) {
            error.zip = 'Zip code is required field'
            isError = true;
        }
        if (formValue.phoneNumber.length < 1) {
            error.phoneNumber = 'Phone Number is required field'
            isError = true;
        }
        await setForm({ ...formValue, error: error })
        return isError;
    }

    const save = async (event) => {
        event.preventDefault();
        if (await validData()) {
            console.log('error', formValue);
            return;
        }

        let object = {
            name: formValue.name,
            phoneNumber: formValue.phoneNumber,
            city: formValue.city,
            state: formValue.state,
            address: formValue.address,
            id: '',
            zip: formValue.zip,
        }

        console.log(object)
        addressbookService.addContact(object).then(data => {
            console.log("Contact added");
            console.log(data);
            setDisplayMessage("Contact Added Successfully");
            setTimeout(() => {
                setDisplayMessage("");
            }, 3000);
        }).catch(error => {
            console.log("Error while adding");
            console.log(error)
            setDisplayMessage("Error while adding contact");
            setTimeout(() => {
                setDisplayMessage("");
            }, 3000);
        })
    }

    const reset = () => {
        setForm({ ...initialValue, id: formValue.id, isUpdate: formValue.isUpdate });
        console.log(formValue);
    }

    return (
        <div className="main">
            <header className="header-content header">
                <div className="logo-content">
                    <img src={logo} alt="" />
                    <div>
                        <span className="address-text">ADDRESS</span><br />
                        <span className="address-text address-book">BOOK</span>
                    </div>
                </div>
            </header>
            <div className="form-content">
                <form className="form" action="#" onSubmit={save}>
                    <div className="form-head">
                        <h1 className="form-head-title">Person Address Form</h1>
                        <Link to="">
                            <img src={CancelButton} className="close-button" />
                        </Link>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">Name</label>
                        <input className="input" type="text" id="name" name="name" placeholder="" value={formValue.name} onChange={changeValue} />
                        <div className="error">{formValue.error.name}</div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="phoneNumber">Phone Number</label>
                        <input className="input" type="tel" id="phoneNumber" name="phoneNumber" value={formValue.phoneNumber} onChange={changeValue} />
                        <div className="error">{formValue.error.phoneNumber}</div>
                    </div>
                    <div className="row-content">
                        <div className="text-row">
                            <label className="label text" htmlFor="address">Address</label>
                            <textarea id="address" className="input" name="address" placeholder="" style={{ height: '100px' }} value={formValue.address} onChange={changeValue}></textarea>
                            <div className="error">{formValue.error.address}</div>
                        </div>
                    </div>
                    <div className="row-content location-row">
                        <div>
                            <label className="label text" htmlFor="city">City</label>
                            <select value={formValue.city} onChange={changeValue} id="city" name="city">
                                <option value="none" selected disabled hidden>Select City</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Chennai">Maduri</option>
                                <option value="Bangalore">Udupi</option>
                                <option value="Hyderabad">Vijayawada</option>
                            </select>
                            <div className="error">{formValue.error.city}</div>
                        </div>
                        <div>
                            <label className="label text" htmlFor="state">State</label>
                            <select value={formValue.state} onChange={changeValue} id="state" name="state">
                                <option value="none" selected disabled hidden>Select State</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Telengana">Telengana</option>
                                <option value="Tamilnadu">Tamil Nadu</option>
                            </select>
                            <div className="error">{formValue.error.state}</div>
                        </div>
                        <div>
                            <label className="label text" htmlFor="zip">Zip Code</label>
                            <input className="input" type="text" id="zip" name="zip" onChange={changeValue} />
                            <div className="error">{formValue.error.zip}</div>
                        </div>
                    </div>
                    <div className="buttonParent">
                        <button type="submit" className="button submitButton" id="addButton" >{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                        <button type="reset" onClick={reset} className="button resetButton">Reset</button>
                    </div>
                    <div className="displaymessage">
                        {displayMeassage}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
