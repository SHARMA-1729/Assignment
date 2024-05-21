


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


    const handleMouseEnter = (event) => {
        event.target.style.backgroundColor = '#fff';
        event.target.style.color = '#000';
    };

    const handleMouseLeave = (event) => {
        event.target.style.backgroundColor = '';
        event.target.style.color = '';
    };

    return (
        <div    style={{ 
            listStyleType: 'none', 
            padding: 0, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'black',
            color: '#f5f6f7',
            fontFamily: 'Tahoma',
            width: '100%',
            height: '100vh',
        }}>
            <h2>Employee Timing</h2>
            <label htmlFor="startTime">Start Time:</label>
            <input type="datetime-local" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)}  style={{width:"50%"}} />
            <label htmlFor="endTime">End Time:</label>
            <input type="datetime-local" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)}  style={{width:"50%"}} />
            <button onClick={filterDataByInterval}     style={{width:"10%", border:"2px solid black" , backgroundColor:"blue",height:"40px",marginTop:"10px",marginLeft:"10px"}}>Fetch Data</button>
            {error && <p>{error}</p>}
            <ul>
                {filteredEmployeeData.map(employee => (
                    <li    style={{ 
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
                    onMouseLeave={handleMouseLeave}   key={employee.id}>{`Name: ${employee.name}, Email: ${employee.email}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default Online;
