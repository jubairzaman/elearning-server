import express from "express";

import { fetch,create,update, deleteUser } from "../controller/userController.js";



const route = express.Router();

route.post ("/create",create);
route.get("/getAllUsers", fetch)


export default route;