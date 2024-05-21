import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [checkIn, setCheckIn] =  useState('');
    const [checkOut, setCheckOut] = useState('');
    const navigate = useNavigate();


    const resetFields = () => {
        setName('');
        setEmail('');
        setPhoneNumber('');
        setAge('');
        setCheckIn('');
        setCheckOut('');
    };



    const saveEmployee = async e => {

        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        e.preventDefault();
        await axios.post('http://localhost:4000/', {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            age: parseInt(age),
            checkIn: checkInDate.toISOString(),
            checkOut: checkOutDate.toISOString()

        });
        resetFields(); 
        navigate('/');
    };

    return (
        <div style={{ 
            listStyleType: 'none', 
            padding: 0, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'black',
            color: '#f5f6f7',
            fontFamily: 'Tahoma'
        }} >
            <h1>Employee Data Entry</h1>
            <form   style={{ backgroundColor: 'black'}} onSubmit={saveEmployee}>
                <div className="">
                    <label htmlFor="name" style={{ 
                textAlign: 'center',
                color: 'white',
               
            }}>
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        style={{display: "block",
                            margin: "5px 0 20px 0",
                            minHeight: "2em",
                            backgroundColor: "#0a0a23",
                            border: "1px solid #0a0a23",
                            color: "white",
                        width:"650px"}}
                        placeholder="Employee name"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{display: "block",
                        margin: "5px 0 20px 0",
                        minHeight: "2em",
                        backgroundColor: "#0a0a23",
                        border: "1px solid #0a0a23",
                        color: "#ffffff",
                    width:"650px"}}
                        placeholder="Employee email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        style={{display: "block",
                        margin: "5px 0 20px 0",
                        minHeight: "2em",
                        backgroundColor: "#0a0a23",
                        border: "1px solid #0a0a23",
                        color: "#ffffff",
                    width:"650px"}}
                        placeholder="Employee phone number"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        style={{display: "block",
                            margin: "5px 0 20px 0",
                            minHeight: "2em",
                            backgroundColor: "#0a0a23",
                            border: "1px solid #0a0a23",
                            color: "#ffffff",
                        width:"650px"}}
                        placeholder="Employee age"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="checkIn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Check-In Time
                    </label>
                    <input
                        type="datetime-local"
                        id="checkIn"
                        value={checkIn}
                        onChange={e => setCheckIn(e.target.value)}
                        style={{display: "block",
                            margin: "5px 0 20px 0",
                            minHeight: "2em",
                            backgroundColor: "#0a0a23",
                            border: "1px solid #0a0a23",
                            color: "#ffffff",
                        width:"650px"}}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="checkOut" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Check-Out Time
                    </label>
                    <input
                        type="datetime-local"
                        id="checkOut"
                        value={checkOut}
                        onChange={e => setCheckOut(e.target.value)}
                        style={{display: "block",
                        margin: "5px 0 20px 0",
                        minHeight: "2em",
                        backgroundColor: "#0a0a23",
                        border: "1px solid #0a0a23",
                        color: "#ffffff",
                    width:"650px"}}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{width:"20%", border:"2px solid black" , backgroundColor:"green",height:"40px",marginTop:"10px",marginLeft:"10px"}}>
                    Save
                </button>
                <Link to="/">
                    <button
                        type="button"
                        style={{width:"20%", border:"2px solid black" , backgroundColor:"red",height:"40px",marginTop:"10px",marginLeft:"10px"}}>
                        Cancel
                    </button>
                </Link>
            </form>


            
        </div>
    );
};

export default AddEmployee;
