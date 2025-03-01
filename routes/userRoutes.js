import express from "express";
import User from "../models/User.js";

const userRouter = express.Router();


userRouter.route("/register").post(async (req, res) => {
    try {

        const { username } = req.body;

        if (!username) {
            res.status(400).json({
                message: "Username required !"
            });
        }

        let user = await User.findOne({ username });

        if (!user) {
            user = await User.create({username});
        }

        res.status(201).json({ message: "User registered successfully", user });

    } catch (error) {
        res.status(500).json({ message: "Error registered user", error: error })
    }
});


userRouter.post("/score", async (req, res) => {
    try {
        const { username, score } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: "User not found" });
        user.score = score;
        await user.save();

        res.json({user});
    } catch (err) {
        res.status(500).json({ message: "Error processing answer", error: err });
    }

})


export { userRouter };