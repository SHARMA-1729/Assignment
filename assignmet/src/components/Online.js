


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Online = () => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [employeeData, setEmployeeData] = useState([]);
    const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/employee');
                setEmployeeData(response.data);
            } catch (error) {
                setError('Error fetching employee data');
            }
        };
        fetchData();
    }, []);

    const filterDataByInterval = () => {
        if (!startTime || !endTime) {
            setError('Please provide both start time and end time');
            return;
        }

        const filteredData = employeeData.filter(employee => {
            const checkInTime = new Date(employee.checkIn);
            return checkInTime >= new Date(startTime) && checkInTime <= new Date(endTime);
        });

        setFilteredEmployeeData(filteredData);
        setError('');
    };

    return (
        <div>
            <h2>Employee Data</h2>
            <label htmlFor="startTime">Start Time:</label>
            <input type="datetime-local" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            <label htmlFor="endTime">End Time:</label>
            <input type="datetime-local" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            <button onClick={filterDataByInterval}>Fetch Data</button>
            {error && <p>{error}</p>}
            <ul>
                {filteredEmployeeData.map(employee => (
                    <li key={employee.id}>{`Name: ${employee.name}, Email: ${employee.email}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default Online;
