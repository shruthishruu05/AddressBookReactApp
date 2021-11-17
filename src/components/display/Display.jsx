import React from "react";
import { Link } from 'react-router-dom';
import './display.scss';
import deleteIcon from '../../assets/delete-black-18dp.svg';
import editIcon from '../../assets/create-black-18dp.svg';
import AddressBookService from "../../service/AddressBook-service";

const Display = (props) => {

    const addressbookService = new AddressBookService();

    const remove = (id) => {
        addressbookService.deleteContact(id).then(data => {
            console.log("Deleted data: ", data);
        }).catch(error => {
            console.log("Error after ", error);
        })
        window.location.reload("/");
    }

    return (
        <table id="display" className="table">
        
           <tbody>
                <tr key={-1}>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Coode</th>
                    <th>Phone Number</th>
                    <th></th>
                </tr>
                
                {
                   
                    props.contactArray && props.contactArray.map((element, index) => (
                        
                        <tr key={index}>
                            <td>{element.name}</td>
                            <td>{element.address}</td>
                            <td>{element.city}</td>
                            <td>{element.state}</td>
                            <td>{element.zip}</td>
                            <td>{element.phoneNumber}</td>
                            <td>
                                <img onClick={() => remove(element.addressId)} alt="delete" src={deleteIcon} />
                                <Link to={`/update/${element.addressId}`} > 
                                    <img src={editIcon} alt="edit" /> 
                                </Link>
                            </td>
                        </tr>
                    ))
                }   
                
            </tbody>
           
        </table>
    )
}

export default Display;