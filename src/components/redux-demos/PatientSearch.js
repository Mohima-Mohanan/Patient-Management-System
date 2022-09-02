//Our Patient Presentation Component

import { useRef, useState } from 'react';

const PatientSearch = (props) => {

    let textRef = useRef();

    let [state, setState] = useState({ search: " " });

    const listofPatients = () => {
        console.log("1. Inside Patient List Presentation Components");
        props.listPatients();
    }

    const handleChange = (event) => {

        setState
            (
                {
                    ...state,
                    [event.target.name]: event.target.value



                }
            );

        props.searchPatient(event.target.value);

    }

    return (
        <div style={{ border: '5px solid green' }}>
            <br />
            <center>
                <table border="5">

                    Patient List:

                    {props.patients && props.patients.map((item, key) =>
                        <tr>
                            <td> {key} </td>
                            <td> {item.name} </td>
                            <td> {item.email} </td>
                        </tr>)}

                </table>
            </center>
            <br/>
            <table border="5">
                Default Value :
                {props.searchedPatients && props.searchedPatients.map((item, key) =>
                    <tr>
                        <td>{key} </td>
                        <td> {item.name} </td>
                        <td> {item.email} </td>
                    </tr>)}

            </table>
            <br /><br />
            Current value of search:{state.search}

            <input type="text" ref={textRef} name="search" value={state.search}
                onChange={event => handleChange(event)} />

            <br />
           
        </div>
    )
}

export default PatientSearch;