import { Chat } from "../models/chat.model";
import asyncHandler from "../../utils/asyncHandler";

export const chat = asyncHandler(async (req, res) => {
	const { message } = req.body;
	try {
		res.status(200).json({
			message: 'ok',
			conversation: {
				you: message,
				zustbuddy: 'Hi, How can I help you today ?'
			}
		})
	} catch (error) {
		console.log(error)
	}
})
