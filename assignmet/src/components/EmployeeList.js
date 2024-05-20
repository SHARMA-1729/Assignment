import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/employee');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employee data:', error);
            }
        };
        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once after the initial render

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <strong>Name:</strong> {employee.name}, <strong>Email:</strong> {employee.email}, <strong>Phone Number:</strong> {employee.phoneNumber}, <strong>Age:</strong> {employee.age},
                        <strong>CheckIn:</strong> {new Date(employee.checkIn).toLocaleString()}, <strong>CheckOut:</strong> {new Date(employee.checkOut).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
