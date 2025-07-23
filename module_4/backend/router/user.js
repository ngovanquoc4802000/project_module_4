import express from "express";
import routerUser from "../controller/userControllers.js";
const router = express.Router();

router.get("/", routerUser.getAllRegister);
router.put("/:id", routerUser.updateApiRegister);
router.post("/register",routerUser.userAPIRegister);
router.post("/login", routerUser.userAPILogin);

router.post("/refresh-token", routerUser.refreshTokenAPI);

export default router;
