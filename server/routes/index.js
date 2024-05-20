import { Router } from "express";
import employeeRoute from "./employeeRoute.js";

const router= Router();
router.use("/api/employee",employeeRoute);

export default router;