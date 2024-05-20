// controllers/employeeController.js

import prisma from '../DB/db.config.js';

// Controller function to create a new employee
export const createEmployee = async (req, res) => {
  try {
    const { email, name, phoneNumber, age, checkIn, checkOut } = req.body;
    const employee = await prisma.employee.create({
      data: {
        email,
        name,
        phoneNumber,
        age,
        checkIn,
        checkOut,
      },
    });
    res.status(201).json(employee);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ error: 'An error occurred while creating the employee.' });
  }
};

// Controller function to get all employees
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'An error occurred while fetching employees.' });
  }
};

// Controller function to get an employee by ID
export const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    res.json(employee);
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).json({ error: 'An error occurred while fetching the employee.' });
  }
};

// Controller function to update an employee
export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { email, name, phoneNumber, age, checkIn, checkOut } = req.body;
  try {
    const updatedEmployee = await prisma.employee.update({
      where: {
        id: parseInt(id),
      },
      data: {
        email,
        name,
        phoneNumber,
        age,
        checkIn,
        checkOut,
      },
    });
    res.json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'An error occurred while updating the employee.' });
  }
};

// Controller function to delete an employee
export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.employee.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ message: 'Employee deleted successfully.' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'An error occurred while deleting the employee.' });
  }
};














export const getEmployeesInTimeInterval = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;

    // Validate startTime and endTime to ensure they are provided and in correct format
    if (!startTime || !endTime || isNaN(Date.parse(startTime)) || isNaN(Date.parse(endTime))) {
      return res.status(400).json({ error: 'Invalid time interval provided' });
    }

    const employeesInTimeInterval = await prisma.employee.findMany({
      where: {
        checkIn: {
          gte: new Date(startTime),
          lt: new Date(endTime),
        },
      },
    });
    res.json(employeesInTimeInterval);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


