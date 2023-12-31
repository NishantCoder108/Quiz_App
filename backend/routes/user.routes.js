import { Router } from "express";
import {
    Login,
    Logout,
    Signup,
    refreshAccessToken,
} from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/register").post(Signup);
router.route("/login").post(Login);
router.route("/logout").post(verifyJWT, Logout);

//secured routes

router.route("/refresh-token").post(refreshAccessToken);

export default router;
