import React from "react";
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
                    props.contactArray && props.contactArray.map((elememt, index) => (
                        <tr key={index}>
                            <td>{elememt.name}</td>
                            <td>{elememt.address}</td>
                            <td>{elememt.city}</td>
                            <td>{elememt.state}</td>
                            <td>{elememt.zip}</td>
                            <td>{elememt.phoneNumber}</td>
                            <td>
                                <img onClick={() => remove(elememt.id)} alt="delete" src={deleteIcon} />
                                <img alt="edit" src={editIcon} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Display;