import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    score: { type: Number, default: 0 },
});


export default mongoose.model("User",UserSchema);