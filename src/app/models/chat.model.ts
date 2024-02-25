import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
	{
		message: {
			type: String,
			required: true,
		}
	},
	{ timestamps: true }
)

export const Chat = mongoose.model("Chat", chatSchema);
