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


userRouter.post("/submit", async (req, res) => {
    try {
        const { username, city, selectedAnswer } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: "User not found" });

        const destination = await Destination.findOne({ name: city });
        if (!destination) return res.status(404).json({ message: "Destination not found" });

        let isCorrect = selectedAnswer === destination.correctAnswer;
        if (isCorrect) user.score += 1;
        await user.save();

        res.json({ isCorrect, score: user.score, funFact: destination.funFact });
    } catch (err) {
        res.status(500).json({ message: "Error processing answer", error: err });
    }

})


export { userRouter };