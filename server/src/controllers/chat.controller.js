const { v4: uuidv4 } = require("uuid");
const ChatMessage = require("../models/chatMessage.model");
const ChatSession = require("../models/chatSession.model");

const { buildPrompt } = require("../services/prompt.service");
const { askGemini } = require("../services/gemini.service");

exports.chat = async (req, res) => {
  try {
    let { sessionId, message } = req.body;

    // Create new session if not provided
    if (!sessionId) {
      sessionId = uuidv4();

      res.cookie("sessionId", sessionId, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge:   10 * 60 * 1000, // 7 days
      });

      await ChatSession.create({
        sessionId,
      });
    }

    // Save user message
    await ChatMessage.create({
      sessionId,
      role: "user",
      content: message,
    });

    // Fetch history
    const history = await ChatMessage.find({
      sessionId,
    }).sort({
      createdAt: 1,
    });

    const prompt = buildPrompt(history);

    const reply = await askGemini(prompt);

    // Save AI reply
    await ChatMessage.create({
      sessionId,
      role: "assistant",
      content: reply,
    });

    return res.json({
      success: true,
      sessionId,
      reply,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
