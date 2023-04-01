import { Router } from "express";
import userControllers from "../controllers/userControllers.js";

const userRoutes = Router();

userRoutes.post("/patient", userControllers.createPatient);
userRoutes.post("/doctor", userControllers.createDoctor);
userRoutes.get("/", userControllers.get);
userRoutes.put("/:id", userControllers.put);
userRoutes.delete("/:id", userControllers.delete);

export default userRoutes;
