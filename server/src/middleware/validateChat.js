const validateChat = (req, res, next) => {
  const { message } = req.body;

  const sessionId = req.cookies.sessionId;

  //   append session id in req body if exist
  if (sessionId) {
    req.body.sessionId = sessionId;
  }

  // Check if message exists
  if (!message) {
    return res.status(400).json({
      success: false,
      message: "Message is required",
    });
  }

  // Check if message is a string
  if (typeof message !== "string") {
    return res.status(400).json({
      success: false,
      message: "Message must be a string",
    });
  }

  // Remove extra spaces
  const trimmedMessage = message.trim();

  // Check empty message
  if (!trimmedMessage) {
    return res.status(400).json({
      success: false,
      message: "Message cannot be empty",
    });
  }

  // Limit message length
  if (trimmedMessage.length > 1000) {
    return res.status(400).json({
      success: false,
      message: "Message cannot exceed 1000 characters",
    });
  }

  // Update cleaned message
  req.body.message = trimmedMessage;

  next();
};

module.exports = validateChat;
