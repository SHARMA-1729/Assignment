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



    const handleMouseEnter = (event) => {
        event.target.style.backgroundColor = '#fff';
        event.target.style.color = '#000';
    };

    const handleMouseLeave = (event) => {
        event.target.style.backgroundColor = '';
        event.target.style.color = '';
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
        }}  >
            <h2>Employee List</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {employees.map(employee => (
                    <li key={employee.id}  style={{ 
                        marginBottom: '10px', 
                        border: '1px solid #ccc', 
                        padding: '10px', 
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s, color 0.3s',
                        color: '#000',
                        backgroundColor: 'black',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        <strong>Name:</strong> {employee.name}, <strong>Email:</strong> {employee.email}, <strong>Phone Number:</strong> {employee.phoneNumber}, <strong>Age:</strong> {employee.age},
                        <strong>CheckIn:</strong> {new Date(employee.checkIn).toLocaleString()}, <strong>CheckOut:</strong> {new Date(employee.checkOut).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
