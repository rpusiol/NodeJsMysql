import { Router } from "express";
import { createEmployees, deleteEmployees, getEmployees, updateEmployees, getEmployee } from'../controllers/employeesControllers.js'

const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.post('/employees', createEmployees);
router.patch('/employees/:id', updateEmployees);
router.delete('/employees/:id', deleteEmployees);

export default router;