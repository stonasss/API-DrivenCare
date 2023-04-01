import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import { validateSchema } from "../middlewares/schemaMiddleware.js";
import { userSchema } from "../schemas/User.js";

const userRoutes = Router();

userRoutes.post("/patient", validateSchema(userSchema), userControllers.createPatient);
userRoutes.post("/doctor", validateSchema(userSchema), userControllers.createDoctor);
userRoutes.get("/", userControllers.get);
userRoutes.put("/:id", userControllers.put);
userRoutes.delete("/:id", userControllers.delete);

export default userRoutes;
