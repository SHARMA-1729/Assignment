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
        await axios.post('http://localhost:4000/employee', {
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
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg sm:shadow sm:border">
            <form onSubmit={saveEmployee}>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Save
                </button>
                <Link to="/">
                    <button
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Cancel
                    </button>
                </Link>
            </form>


            
        </div>
    );
};

export default AddEmployee;
