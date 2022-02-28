import React, { Component } from 'react';
import {formContainer, formMainContainer, formSelect, formInputForSubmit, formInputForPassword,
    formInputforText, formh1, formBody} from "./reservationFormElements";


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            ReservationTime: "",
            PhoneNumber: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    reservationTimehandler = (event) => {
        this.setState({
            ReservationTime: event.target.value
        })
    }

    PhoneNumberhandler = (event) => {
        this.setState({
            PhoneNumber: event.target.value
        })
    }

     /*genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    } */

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            ReservationTime: '',
            PhoneNumber: "",
        })
        event.preventDefault();

    }





    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Reservation Time :</label><input type ="text" value = {this.state.ReservationTime} onChange={this.reservationTimehandler} type="reservationTime"  placeholder="ReservationTime..." /><br />

                    <label>Phone Number :</label><input type ="text" value = {this.state.PhoneNumber} onChange={this.PhoneNumberhandler} type="PhoneNumber"  placeholder="PhoneNumber..." /><br />


                    <input type="submit" value="Submit" />
                </form>

            </div>

        )
    }
}

export default Form;
