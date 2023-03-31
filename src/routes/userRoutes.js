import { Router } from "express";
import userControllers from "../controllers/userControllers.js";

const userRoutes = Router();

userRoutes.post('/', userControllers.create);
userRoutes.get('/', userControllers.get);
userRoutes.put('/:id', userControllers.put);
userRoutes.delete('/:id', userControllers.delete);

export default userRoutes;