import express from "express";
import Destination from "../models/Destination.js";

const destinationRouter = express.Router();

destinationRouter.get("/random", async (req, res) => {
    try {

        const count = await Destination.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);
        const randomDestination = await Destination.findOne().skip(randomIndex);

        if (!randomDestination) {
            return res.status(404).json({ message: "No destinations found!" });
        }

        res.json({
            city: randomDestination.city,
            country: randomDestination.country,
            funFact:randomDestination.funFact,
            clues: randomDestination.clues,
            options: randomDestination.options,
        });

    } catch (error) {
        res.status(500).json({ message: "Error fetching destination", error: error });
    }
});


export { destinationRouter };













