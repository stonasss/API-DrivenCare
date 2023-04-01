import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import { validateSchema } from "../middlewares/schemaMiddleware.js";
import { userSchema } from "../schemas/User.js";

const userRoutes = Router();

userRoutes.post("/signup/patient", validateSchema(userSchema), userControllers.createPatient);
userRoutes.post("/signup/doctor", validateSchema(userSchema), userControllers.createDoctor);
userRoutes.post("/signin/patient", userControllers.signinPatient);
userRoutes.post("/signin/doctor", userControllers.signinDoctor);
/* userRoutes.get("/", userControllers.get);
userRoutes.put("/:id", userControllers.put);
userRoutes.delete("/:id", userControllers.delete); */

export default userRoutes;
