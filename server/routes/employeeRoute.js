// routes/employeeRoutes.js

import { Router } from "express";
import { createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee, getEmployeesInTimeInterval} from "../Controller/employeeController.js";

const router = Router();

router.post('/', createEmployee);
router.put("/:id",  updateEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.delete("/:id", deleteEmployee);
router.get('/time-interval', getEmployeesInTimeInterval);


export default router;
